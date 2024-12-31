use std::fmt;
use regex::{Regex, RegexBuilder};
use url::{Position, Url};

static WILDCARD_SCHEMES: &'static [&str] = &["http", "https", "ws", "wss"];

#[derive(Debug)]
pub enum Error {
    MissingScheme(String),
    MissingPath(String),
    /// The regular expression generated from the path pattern failed to compile
    RegexCompile {
        /// The `source` given to [`Pattern::new`]
        pattern_source: String,
        /// The regular expression generated from `pattern_source`
        pattern_regex: String,
        /// The exception from `RegexBuilder::build`
        source: regex::Error,
    },
}


#[derive(Debug, Clone)]
enum Schemes {
    All,
    Wildcard,
    SpecificScheme(String),
}

impl Schemes {
    fn include(&self, scheme: &str) -> bool {
        match self {
            Schemes::All => true,
            Schemes::Wildcard => WILDCARD_SCHEMES.iter().any(|s| *s == scheme),
            Schemes::SpecificScheme(specific_scheme) => *specific_scheme == scheme,
        }
    }
}

#[derive(Debug, Clone)]
enum Hosts {
    All,
    SpecificHost(Option<String>),
    SpecificHostWithSubdomains(String),
}

impl Hosts {
    fn include(&self, host: Option<&str>) -> bool {
        let host = host.map(|h| h.to_lowercase());
        match self {
            Hosts::All => true,
            Hosts::SpecificHost(specific_host) => host == *specific_host,
            Hosts::SpecificHostWithSubdomains(specific_host) => {
                if let Some(host) = host {
                    if host.len() > specific_host.len() {
                        let subdomain_offset = host.len() - specific_host.len();
                        if host.chars().nth(subdomain_offset - 1).unwrap() != '.' {
                            return false;
                        }

                        &host[subdomain_offset..] == *specific_host
                    } else {
                        host == *specific_host
                    }
                } else {
                    false
                }
            }
        }
    }
}


#[derive(Debug, Clone)]
enum Paths {
    All,
    MatchingPattern(Regex),
}

impl Paths {
    fn include(&self, path: &str) -> bool {
        println!("path:{}", path);
        match self {
            Paths::All => true,
            Paths::MatchingPattern(pattern) => pattern.is_match(path),
        }
    }
}


#[derive(Debug, Clone)]
pub struct Pattern {
    source: String,
    schemes: Schemes,
    hosts: Hosts,
    paths: Paths,
}

impl Pattern {
    /// Return a pattern that will match any URL
    pub fn wildcard() -> Pattern {
        Self::wildcard_from_source("<all_urls>")
    }

    fn wildcard_from_source(source: &str) -> Pattern {
        Self {
            source: source.to_string(),
            schemes: Schemes::All,
            hosts: Hosts::All,
            paths: Paths::All,
        }
    }

    /// Parse a pattern from the given `source`. If using `relaxed`, it will not adhere to the requirements of the
    /// Mozilla format by allowing the omission of an URL scheme and the omission of an explicit path, causing it
    /// to assume these as wildcards. This mode is intended to be more forgiving for common user patterns.
    pub fn new(source: &str, relaxed: bool) -> Result<Pattern, Error> {
        // This implementation used mozilla::extensions::MatchPattern::Init as a reference (see https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp
        // for the full details) for the non-relaxed parsing.
        if source == "<all_urls>" {
            return Ok(Self::wildcard_from_source(source));
        }

        if source == "*" && relaxed {
            return Ok(Self::wildcard_from_source(source));
        }

        let original_source = source;

        // This means we don't (yet) support schemes without a host locator, like e.g. data:, which
        // don't have a //.
        let end_of_scheme = source.find("://");

        let (source, schemes) = if let Some(end_of_scheme) = end_of_scheme {
            let scheme = &source[..end_of_scheme];
            if scheme == "*" {
                (&source[end_of_scheme + 3..], Schemes::Wildcard)
            } else {
                (
                    &source[end_of_scheme + 3..],
                    Schemes::SpecificScheme(scheme.to_lowercase()),
                )
            }
        } else {
            if !relaxed {
                return Err(Error::MissingScheme(original_source.to_string()));
            }

            (source, Schemes::Wildcard)
        };

        let end_of_host = source.find("/").unwrap_or(source.len());
        let host = &source[..end_of_host];
        let hosts = if host == "*" {
            Hosts::All
        } else if host.starts_with("*.") {
            Hosts::SpecificHostWithSubdomains(host[2..].to_lowercase())
        } else if host.len() > 0 {
            Hosts::SpecificHost(Some(host.to_lowercase()))
        } else {
            Hosts::SpecificHost(None)
        };

        let path = &source[end_of_host..];
        let paths = if path.is_empty() {
            if relaxed {
                Paths::All
            } else {
                return Err(Error::MissingPath(original_source.to_string()));
            }
        } else if relaxed && path == "/" {
            Paths::All
        } else {
            Paths::MatchingPattern(Self::glob_to_regex(relaxed, path)?)
        };

        Ok(Self {
            source: source.to_string(),
            schemes,
            hosts,
            paths,
        })
    }

    /// Check if the [`Pattern`] matches the `url`.
    pub fn is_match(&self, url: &Url) -> bool {
        let schemes = self.schemes.include(url.scheme());
        // println!("schemes: {:?}",schemes);

        let hosts = self.hosts.include(url.host_str());
        // println!("hosts: {:?}",hosts);
        let paths = self.paths.include(&url[Position::BeforePath..Position::AfterQuery]);
        // println!("paths: {:?}",paths);
        schemes && hosts && paths
    }

    /// Convert a glob with asterisks to an anchored regex
    fn glob_to_regex(relaxed: bool, glob: &str) -> Result<Regex, Error> {
        let mut regex_pattern = String::with_capacity(glob.len() * 2);
        regex_pattern.push('^');
        for c in glob.chars() {
            if c == '*' {
                regex_pattern.push_str(".*");
            } else {
                if regex_syntax::is_meta_character(c) {
                    regex_pattern.push('\\');
                }

                regex_pattern.push(c);
            }
        }
        regex_pattern.push('$');

        RegexBuilder::new(&regex_pattern)
            .case_insensitive(relaxed)
            .build()
            .map_err(|err| Error::RegexCompile {
                pattern_source: glob.to_string(),
                pattern_regex: regex_pattern,
                source: err,
            })
    }
}

impl Into<String> for Pattern {
    fn into(self) -> String {
        self.source
    }
}

impl TryFrom<String> for Pattern {
    type Error = Error;
    fn try_from(raw: String) -> Result<Self, Error> {
        Pattern::new(&raw, true)
    }
}

impl fmt::Display for Pattern {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:#?}", self.source)
    }
}


var unsafeWindow = this;

function GM_registerMenuCommand() {

}

function GM_xmlhttpRequest(option) {
  if (typeof option !== 'object') return undefined;

  option.method = option.method ? option.method.toUpperCase() : 'GET';
  option.data = option.data || {};

  if (typeof option.data !== 'string') {
    const formData = new URLSearchParams(option.data).toString();
    option.data = formData;
  }

  if (option.method === 'GET' && option.data != null && option.data.length > 0) {
    const delimiter = location.search.length === 0 ? '?' : '&';
    option.url = `${option.url}${delimiter}${option.data}`;
  }

  const url = `https://local.mossbooster.com/proxy?url=${encodeURIComponent(option.url)}`;
  option.url = url;

  const xhr = new XMLHttpRequest();
  xhr.timeout = option.timeout;
  xhr.responseType = option.responseType || 'text';
  xhr.onerror = option.onerror;
  xhr.ontimeout = option.ontimeout;
  xhr.open(option.method, option.url, true);
  xhr.setRequestHeader('requestType', 'xhr');

  if (option.headers) {
    for (const [key, value] of Object.entries(option.headers)) {
      const keyL = key.toLowerCase();
      try {
        if (HeaderQuery(keyL)) {
          xhr.setRequestHeader(`${keyL}-steamHelper`, value);
        } else {
          xhr.setRequestHeader(key, value);
        }
      } catch (e) { }
    }
  } else {
    if (option.method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
  }

  if (option.responseType === 'json') {
    xhr.setRequestHeader('Content-Type', `application/json; charset=${document.charset}`);
  }

  xhr.onload = e => {
    console.log(e);
    if (typeof option.onload === 'function') {
      option.onload(e.target);
    }
  };

  xhr.send(option.method === 'POST' ? option.data : null);
}

function HeaderQuery(key) {
  switch (key) {
    case 'referer':
    case 'cookie':
      return true;
    default:
      return false;
  }
}

function GM_addStyle(css) {
  try {
    const style = document.createElement('style');
    style.textContent = css;
    (document.head || document.body || document.documentElement || document).appendChild(style);
  } catch (e) {
    console.log(`Error: env: adding style ${e}`);
  }
}

function GM_getValue(name, defaultValue) {
  let value = window.localStorage.getItem(name)
  if (!value) {
    return defaultValue;
  }
  let type = value[0];
  value = value.substring(1);
  switch (type) {
    case 'b':
      return value == 'true';
    case 'n':
      return Number(value);
    case 'o':
      try {
        return JSON.parse(value);
      } catch (e) {
        console.log("Error: env: GM_getValue " + e);
        return defaultValue;
      }
    default:
      return value;
  }
}

function GM_setValue(name, value) {
  const type = typeof value[0];

  switch (type) {
    case 'o':
      try {
        value = `${type}${JSON.stringify(value)}`;
      } catch (e) {
        return;
      }
      break;
    default:
      value = `${type}${value}`;
  }

  try {
    if (typeof name !== 'string') JSON.stringify(name);
    localStorage.setItem(name, value);
  } catch (e) {
  }
}

function GM_log(message) {
  window.console ? window.console.log(message) : console.log(message);
}

function GM_listValues() {
  return Array.from(localStorage.keys());
}

function onlySteam() {
  let el = document.getElementById('global_actions');

  if (!el) {
    let box = document.getElementById('footer');

    if (box) {
      const html = '<div id="global_actions"><div id="global_action_menu"></div></div>';
      const item = document.createElement('div');
      item.innerHTML = html;
      box.append(item);
    }
  }
}

onlySteam();

function matchDomain(domains) {
  if (domains === undefined) return false;
  if (typeof domains === 'string') {
    domains = [domains];
  }
  const href = window.location.href;
  for (let domain of domains) {
    const regex = new RegExp(`${domain}`, 'i');
    if (regex.test(href) === true) {
      return true;
    }
  }
  return false;
}

function execute(domains,closure)
{
  if(matchDomain(domains))
  {
    closure();
  }
}
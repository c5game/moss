// ==UserScript==
// @name         pureSteam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  纯净版steam
// @author       Dingsl
// @run-at       document-end
// @match        https://store.steampowered.com/
// @match        https://store.steampowered.com/specials*
// @require      https://lib.sinaapp.com/js/jquery/3.1.0/jquery-3.1.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==


(function () {
  'use strict';


    // 首页dom
    const eventDOM = $("#module_special_offers")
    const module_top_new_releases = $('#module_top_new_releases')
    const categoryDOM = $(".content_hub_carousel_ctn")
    const playedRecommendDOM = $("#module_shuffle_target")
    const top_new_releases_background = $(".top_new_releases_background")
    const recently_updated_block = $(".recently_updated_block")
    const recommended_by_steam_labs_ctn = $('.recommended_by_steam_labs_ctn')
    const module_deep_dive = $('#module_deep_dive')
    const module_discovery_queue = $('#module_discovery_queue')
    const recommended_creators_ctn = $(".recommended_creators_ctn")
    const best_selling_vr_ctn = $(".best_selling_vr_ctn")
    const read = $('#load_addtl_scroll_target').next()
    const liveStream = $('.live_streams_ctn')
    // 优惠列表页dom


    const IndexDomList = [eventDOM, module_top_new_releases, categoryDOM, playedRecommendDOM, top_new_releases_background, recently_updated_block, recommended_by_steam_labs_ctn, module_deep_dive, module_discovery_queue, recommended_creators_ctn, best_selling_vr_ctn, read, liveStream]

    for (const dom of IndexDomList) {
      dom.remove()
    }
    let specialsInterval
    specialsInterval = setInterval(() => {
      const sale_events = $('.sale_events')
      const contenthubsections = $('.contenthubsections')
      const items = $('.items')
      const specialsDomList = [sale_events, contenthubsections, items]
      for (const dom of specialsDomList) {
        if (dom.length > 0) {
          dom.remove()
          clearInterval(specialsInterval)
        }

      }
    }, 1000);





  //eventDOM.remove()
  // Your code here...
})();


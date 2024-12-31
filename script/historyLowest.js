// ==UserScript==
// @name         首页优惠列表史低插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优惠列表检查史低
// @author       Dingsl
// @run-at       document-end
// @match        https://store.steampowered.com/
// @connect      esapi.isthereanydeal.com
// @require      https://lib.sinaapp.com/js/jquery/3.1.0/jquery-3.1.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==
/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
(function () {
  'use strict';
  if (window.addEventListener) // W3C standard
  {
    window.addEventListener('load', myFunction, false); // NB **not** 'onload'
  }
  else if (window.attachEvent) // Microsoft
  {
    window.attachEvent('onload', myFunction);
  }
  function myFunction() {
    $(document).on('click', '#tab_specials_content_trigger', function () {
      const appIds = getspecialsAppId()
      for (const app of appIds) {
        GM_xmlhttpRequest({
          url: `https://esapi.isthereanydeal.com/v01/prices/?appids=${app.type == 'app' ? app.id : ''}&subids=${app.type == 'sub' ? app.id : ''}&stores=steam&cc=cn&coupon=true`,
          method: 'get',
          onload: function (res) {
            if (res.status == 200) {

              const data = JSON.parse(res.response).data.data
              const info = data[`${app.type}/${app.id}`]
              if (!info.price || (info.price && info.price.price) <= info.lowest.price) {
                const discountDOM = $(`.tab_item[data-ds-${app.type == 'app' ? 'appid' : 'packageid'}="${app.id}"]`).find('.discount_pct')
                const text = discountDOM.text()
                discountDOM.text(`-${info.price.cut}% 史低`)
                discountDOM.css({ 'width': '37px', 'text-align': 'center' })
              }
            }

          }
        })
      }
    })

  }
  function getspecialsAppId() {
    const domList = $('#tab_specials_content .tab_item')
    console.log(domList)
    const appIds = []
    domList.each(function(index,dom){
      const info = {}
      if ($(dom).attr('data-ds-packageid')) {
        info.type = 'sub',
          info.id = $(dom).attr('data-ds-packageid')
      } else {
        info.type = 'app',
          info.id = $(dom).attr('data-ds-appid')
      }
      appIds.push(info)
    });

    return appIds
  }
  //eventDOM.remove()
  // Your code here...
})();
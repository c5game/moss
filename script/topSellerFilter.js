// ==UserScript==
// @name         topSellerFilter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  首页热门游戏价格筛选
// @author       Dingsl
// @run-at       document-end
// @match        https://store.steampowered.com/
// @require      https://lib.sinaapp.com/js/jquery/3.1.0/jquery-3.1.0.min.js
// @connect      steampowered.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  'use strict';
  // 复写steam生成列表方法，修改为生成30个  
  GHomepage.FilterTab = function (id, opts) {
    var Settings = $.extend({ games_already_in_library: false, only_current_platform: true }, opts);

    var $elTabSection = $(id);
    if (!$elTabSection.length)
      return;

    if ($elTabSection.children('.tab_content_items').length)
      $elTabSection = $elTabSection.children('.tab_content_items');

    GDynamicStorePage.FilterCapsules(30, 30, $elTabSection.children('.tab_item'), $elTabSection, Settings);

    // the results of $elTabSection.children('.tab_item') will change after the call to FilterCapsules above
    GHomepage.InstrumentTabbedSection($elTabSection.children('.tab_item'));
  }
  if (window.addEventListener) // W3C standard
  {
    window.addEventListener('load', myFunction, false); // NB **not** 'onload'
  }
  else if (window.attachEvent) // Microsoft
  {
    window.attachEvent('onload', myFunction);
  }

  function myFunction() {

    const filterHtml = '<div class="range_container" style="margin-top: 8px;"><div class="range_container_inner"><input data-panel="{autoFocus:true,focusable:true,clickOnActivate:true}" class="range_input" type="range" id="price_range" min="0" max="13" step="1" value="13"></div><div class="range_display" id="price_range_display">任意价格</div></div>'
    const baseGameDetailURL = function (appId) {
      return `https://store.steampowered.com/apphoverpublic/${appId}?review_score_preference=0&l=schinese&pagev6=true`
    }
    const baseFilterListURL = function (start, maxprice) {
      return `https://store.steampowered.com/search/results/?query&start=${start}&count=100&dynamic_data=&force_infinite=1&maxprice=${maxprice}&hidef2p=${hidef2p}&supportedlang=schinese&os=win&filter=topsellers&ndl=1&snr=1_7_7_7000_7&infinite=1`
    }
    const leftGameContentContainer = $('.tab_content_items')
    const rightGameDetailContainer = $('#tab_preview_container')
    const allTopSellerGamesInfoList = []
    const home_rightcol_offsetLeft =  getPoint($('.home_rightcol')[0]).left
    let hidef2p = $('#top_sellers_f2p_check').val()

    let maxprice
    let start = 0
    addListener()
    setTimeout(()=> {
      
      
    }, 5000)
   
      $(document).on('click', '#tab_topsellers_content_trigger', () => {
        if ($('.range_container').length > 0) {
          return
        }
        $('#topsellers_controls .top_sellers_info').before(filterHtml)
        var rgPriceStopData = [{ "price": "free", "label": "\u514d\u8d39" }, { "price": 20, "label": "\u4f4e\u4e8e \u00a5 20.00" }, { "price": 40, "label": "\u4f4e\u4e8e \u00a5 40.00" }, { "price": 60, "label": "\u4f4e\u4e8e \u00a5 60.00" }, { "price": 80, "label": "\u4f4e\u4e8e \u00a5 80.00" }, { "price": 100, "label": "\u4f4e\u4e8e \u00a5 100.00" }, { "price": 120, "label": "\u4f4e\u4e8e \u00a5 120.00" }, { "price": 140, "label": "\u4f4e\u4e8e \u00a5 140.00" }, { "price": 160, "label": "\u4f4e\u4e8e \u00a5 160.00" }, { "price": 180, "label": "\u4f4e\u4e8e \u00a5 180.00" }, { "price": 200, "label": "\u4f4e\u4e8e \u00a5 200.00" }, { "price": 220, "label": "\u4f4e\u4e8e \u00a5 220.00" }, { "price": 240, "label": "\u4f4e\u4e8e \u00a5 240.00" }, { "price": null, "label": "\u4efb\u610f\u4ef7\u683c" }]
        $(function () {

          $('#price_range').on('input', function () {
            $('#price_range_display').text(rgPriceStopData[this.value * 1].label);

            var $HideF2P = $('.tab_filter_control_row[data-param=hidef2p]');
            if (this.value == 0) {
              $HideF2P.addClass('disabled');
            }
            else {
              $HideF2P.removeClass('disabled');
            }
          }).trigger('input');

          $('#price_range').on('change', function () {
            $('#maxprice_input').val(rgPriceStopData[this.value].price);
            maxprice = rgPriceStopData[this.value].price
            AjaxSearchResults();
          });
        })
      })
    function AjaxSearchResults() {
      let httpRequest;
      if (typeof GM < "u" && GM.xmlHttpRequest)
        httpRequest = GM.xmlHttpRequest;
      else if (typeof GM < "u" && GM_xmlhttpRequest)
        httpRequest = GM_xmlhttpRequest;
      else if (typeof GM_xmlhttpRequest < "u")
        httpRequest = GM_xmlhttpRequest;
      else if (typeof GM < "u" && GM.xmlHttpRequest)
        httpRequest = GM.xmlHttpRequest;
      else
        return;
      httpRequest({
        url: baseFilterListURL(0, maxprice),
        method: "get",
        headers: {
          "content-type": "application/json",
          // "user-agent": navigator.userAgent,
        },
        responseType: "json",
        onload: function (res) {
          const parser = new DOMParser()
          const resultDOM = parser.parseFromString(res.response.results_html, 'text/html')
          extractListData(resultDOM)
        }
      },

      )
    }
    function extractListData(dom) {

      const Alist = $(dom).find('a')
      $('.tab_content_items').empty()
      let timeout
      for (let i = 0; i < Alist.length; i++) {
        if (i < 30) {
          const searchPriceHtml = $(Alist[i]).find('.search_price').eq(0).html()
          let itemObj

          itemObj = {
            appId: Alist[i].dataset.dsAppid,
            imgUrl: GStoreItemData.rgAppData[Alist[i].dataset.dsAppid] && GStoreItemData.rgAppData[Alist[i].dataset.dsAppid].headerv5 ? GStoreItemData.rgAppData[Alist[i].dataset.dsAppid].headerv5 : $(Alist[i]).find('img').attr('src'),
            name: $(Alist[i]).find('.title').text(),
            platfromspan: $(Alist[i]).find('.platform_img').parent().html(),
            priceDomInfo: {
              orginPrice: $(Alist[i]).find('strike').text().replace(/\ +/g, "").replace(/[\r\n]/g, ""),
              price: searchPriceHtml.split('>')[searchPriceHtml.split('>').length - 1].replace(/\ +/g, "").replace(/[\r\n]/g, ""),
              discount: $(Alist[i]).find('.search_discount').eq(0).text().replace(/\ +/g, "").replace(/[\r\n]/g, "")
            },
          }

          getGameDetail(itemObj.appId).then((moreGameInfo) => {
            itemObj = Object.assign(itemObj, moreGameInfo)
            allTopSellerGamesInfoList.push(itemObj)
            if (GStoreItemData.rgAppData[itemObj.appId]) {
              leftGameContentContainer.append(generateListDOM(itemObj))
              clearTimeout(timeout)
              timeout = setTimeout(() => {
                GHomepage.InstrumentTabbedSection($('.tab_item'));
                if ($('#tab_topsellers_content a').length < 10) {
                  for (let i = $('#tab_topsellers_content .tab_content_items a').length; i <= 10; i++) {
                    leftGameContentContainer.append('<a class="tab_item app_impression_tracked" ></a>')
                  }
                }
              }, 1000)

            }
          })
        }

      }
      setTimeout(() => {

      }, 3000)
    }
    function getGameDetail(appId) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          url: baseGameDetailURL(appId),
          method: 'get',
          headers: {
            "content-type": "application/json",
            // "user-agent": navigator.userAgent,
          },
          responseType: 'text',
          onload: function (res) {
            const parser = new DOMParser()
            const resultDOM = parser.parseFromString(res.responseText, 'text/html')
            const imageDOMs = $(resultDOM).find('.screenshot')
            const imgList = []

            imageDOMs.each(function(index, item) {
              const style = $(item).attr('style')
              let imgURL = style.split(' ')[2]
              imgList.push(imgURL)
            });
        
            const reviewDOM = $(resultDOM).find('.hover_review_summary')[0]
            const tagList = []
        
            let tagsDom=$(resultDOM).find('.app_tag')
            let sliceTags = tagsDom.length>5?tagsDom=tagsDom.slice(0,5):tagsDom=tagsDom
            sliceTags.each(function(index, item) {
              tagList.push($(item).text())
            });
            resolve({
              imgList,
              tagList,
              reviewDOM
            })
          }
        })
      })

    }
    function generateListDOM(gameInfo) {
      return `<a href="https://store.steampowered.com/app/${gameInfo.appId}/_/?snr=1_4_4__tab-TopGrossing" class="tab_item app_impression_tracked" data-ds-appid="${gameInfo.appId}" data-ds-itemkey="App_${gameInfo.appId}" data-ds-tagids="" data-ds-descids="">
        <div class="tab_item_cap" style="height: 69px;overflow:hidden">
          <img class="tab_item_cap_img" style="width: 184px;" src="${gameInfo.imgUrl}">
        </div>
        <div class="discount_block tab_item_discount ${gameInfo.priceDomInfo.discount ? '' : 'no_discount'}" data-price-final="4420" data-bundlediscount="0" data-discount="35">
          ${gameInfo.priceDomInfo.discount ?
          `<div class="discount_pct">${gameInfo.priceDomInfo.discount}</div>`
          :
          ''
        }
          <div class="discount_prices">
            ${gameInfo.priceDomInfo.discount ?
          `<div class="discount_original_price">${gameInfo.priceDomInfo.orginPrice}</div>`
          :
          ''
        }
            <div class="discount_final_price">${gameInfo.priceDomInfo.price}
          </div>
          </div>
        </div>
            <div class="tab_item_content">
              <div class="tab_item_name">${gameInfo.name}</div>
              <div class="tab_item_details">
              ${gameInfo.platfromspan}
              <div class="tab_item_top_tags"><span class="top_tag">${gameInfo.tagList[0]}</span><span class="top_tag">, ${gameInfo.tagList[1]}</span><span class="top_tag">, ${gameInfo.tagList[2]}</span>${gameInfo.tagList[3] ? `<span class="top_tag">, ${gameInfo.tagList[3]}</span>` : ''} ${gameInfo.tagList[4] ? `<span class="top_tag">, ${gameInfo.tagList[4]}</span>` : ''}</div>
            </div>
        </div>
        <div style="clear: both;"></div>
      </a>`
    }
    function addListener() {
      $(document).on('click', '#top_sellers_f2p_check', function (e) {
        hidef2p = e.target.checked ? '' : 1
        AjaxSearchResults();
      })
      $(document).on('scroll', function (e) {
        const scrollTop = $(document).scrollTop()
        const tab_containerTop = getPoint($('.tab_container')[0]).top
        if (scrollTop >= tab_containerTop) {
          $('.home_rightcol').css({ "position": 'fixed', "top": '0px', "left": `${home_rightcol_offsetLeft - 15}px`, 'height': '810px' })
          if (scrollTop - tab_containerTop > ($('.home_tabs_content')[0].clientHeight - 810)) {
            $('.home_rightcol').css({ 'position': 'absolute', 'left': `${home_rightcol_offsetLeft - $(".home_page_content.flex_cols").offset().left -15}px`, 'bottom': `-15px`, 'top': 'auto' })
          }
        } else {
          $('.home_rightcol').css({ "position": 'unset', "top": '0', "left": '0', "background": "none", 'height': 'auto' })
        }
      })
      $(document).on('click', '#top_sellers_library_check', function (e) {
        AjaxSearchResults();
      })
    }
    function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
        var t = obj.offsetTop; //获取该元素对应父容器的上边距
        var l = obj.offsetLeft; //对应父容器的上边距
        //判断是否有父容器，如果存在则累加其边距
        while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
            t += obj.offsetTop; //叠加父容器的上边距
            l += obj.offsetLeft; //叠加父容器的左边距
        }
        return {
          left: l,
          top: t
        }
    }

  }

})();
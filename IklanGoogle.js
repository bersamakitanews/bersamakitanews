window.googletag = window.googletag || {cmd: []};

var interstitialSlot, staticSlot;
let anchorSlot;

dfp_keywords = getKeywords();


    
gpt_slot_objects = [];

googletag.cmd.push(function() {
    
//Adslot 1 declaration
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    // This slot is allowed to refresh, as it contains the targeting keys which have been declared for refresh.

                     
        // setTargeting(REFRESH_KEY, REFRESH_VALUE).
        // setTargeting('test', 'lazyload').
        // addService(googletag.pubads());
        
    
        // gpt_mmr = googletag.defineSlot('/4905536/detik_mobile/news/mmr', [300, 250], 'div-gpt-ad-1573456464455-0').
        // setTargeting(REFRESH_KEY, REFRESH_VALUE).
        // addService(googletag.pubads());
// 
           
                
       // gpt_billboard = googletag.defineSlot('/4905536/detik_mobile/news/billboard', [[320, 150], [320, 100]], 'div-gpt-ad-1695233693349-0').
       //  setTargeting(REFRESH_KEY, REFRESH_VALUE).
       //  addService(googletag.pubads());

             
           gpt_staticbanner1 = googletag.defineSlot('/4905536/detik_mobile/news/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1587882110917-0').
          setTargeting(REFRESH_KEY, REFRESH_VALUE).
          addService(googletag.pubads());
                       
                
              // gpt_parallax = googletag.defineSlot('/4905536/detik_mobile/news/parallax_detail', [[300, 600], [320, 480], [1, 1], [300, 250]], 'div-gpt-ad-1576067331035-0').
              // setTargeting(REFRESH_KEY, REFRESH_VALUE).
              // addService(googletag.pubads());
            
           // gpt_parallax2 = googletag.defineSlot('/4905536/detik_mobile/news/parallax2', [[1, 1], [300, 250], [300, 600]], 'div-gpt-ad-1576065435299-0').
           //  setTargeting(REFRESH_KEY, REFRESH_VALUE).
           //   addService(googletag.pubads());
           
           // gpt_stickystaticclose = googletag.defineSlot('/4905536/detik_mobile/news/sticky_static', [[320, 100], [320, 50], [1, 1]], 'div-gpt-ad-1534323596855-0').
           //    setTargeting(REFRESH_KEY, REFRESH_VALUE).
           //    addService(googletag.pubads());
// 
//   
//         
//     // Number of seconds to wait after the slot becomes viewable.
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 20;
    googletag.pubads().addEventListener('impressionViewable', function(event) {
      var slot = event.slot;
      if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
        setTimeout(function() {
//             
// var staticdetailFirst = $("div.staticdetail_ads").children();
// if(staticdetailFirst.length > 1){
// staticdetailFirst[0].remove();
// }
// var staticdetailSecond = $("div#div-gpt-ad-1708418164533-0").children();
// if(staticdetailSecond.length > 1){
// staticdetailSecond[0].remove();
// }
// $("div#inventory-p5").remove();
// $(".teads-player").remove();
//             
          googletag.pubads().refresh([slot]);
        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
      }
    });

// Define a web interstitial ad slot.

// interstitialSlot = "";
// //googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
//      
// if(interstitialSlot){
// interstitialSlot.addService(googletag.pubads());
// console.log("Interstitial is loading...");
// googletag.pubads().addEventListener('slotOnload', function(event) {
// if (interstitialSlot === event.slot) {
//     console.log("Interstitial is loaded.");
// }
// });
// }

// Define an anchor ad slot

// anchorSlot = googletag.defineOutOfPageSlot(
// '/4905536/detik_mobile/news/sticky_static',
// document.body.clientWidth <= 500
// ? googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
// : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
// );
// 
// if (anchorSlot) {
//     anchorSlot.addService(googletag.pubads());
//     googletag.pubads().addEventListener('slotOnload', function (event) {
//         var metaTag = $('meta[name="contenttype"][content="wpkanal"]');
//         if (anchorSlot === event.slot) {
//             if (metaTag.length) {
//                 $(".back-top").animate({ "bottom": "217px" }, 300);
//                 $(".notif_breakingnews").css("bottom", "160px");
//                 $(".bottom-sticky").css("bottom", "160px");
//                 $('.floatingshare').css("bottom", "160px");
//                 $('.breaking-detikpagi').css("bottom", "160px");
//                 $('a[dtr-sec="back to top"]').css("bottom", "160px");
//             }
//             $(".sticky-share").css({ "bottom": "140px" });
//         }
//     });
// }




gpt_megabillboard2 = googletag.defineSlot('/4905536/detik_mobile/news/mega_billboard', [[320, 480], [1, 1]], 'div-gpt-ad-1668154702284-0').addService(googletag.pubads());

gpt_billboard = googletag.defineSlot('/4905536/detik_mobile/news/billboard', [[320, 150], [320, 100]], 'div-gpt-ad-1695233693349-0').addService(googletag.pubads());

// gpt_navbar2 = googletag.defineSlot('/4905536/detik_mobile/news/navbar2', [1, 1], 'div-gpt-ad-1736956948720-0').addService(googletag.pubads());

gpt_inbetween = googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/inbetween', 'div-gpt-ad-1658811024221-0').addService(googletag.pubads());

// gpt_parallax = googletag.defineSlot('/182251254/Ureka_Supply_detik.com_Outstream_1x1_311024', [[300, 600], [1,1]], 'div-gpt-ad-1730344309218-0').addService(googletag.pubads());

gpt_parallax = googletag.defineSlot('/4905536/detik_mobile/news/parallax_detail', [[300, 600], [320, 480], [1, 1], [300, 250]], 'div-gpt-ad-1576067331035-0').addService(googletag.pubads());

//gpt_staticdetail = googletag.defineSlot('/182251254/Ureka_Supply_detik.com_Outstream_1x1_311024', [1,1], 'div-gpt-ad-1730344309218-0').addService(googletag.pubads());

// window.uk_delivery_1728960538587 = googletag.defineSlot('/3407884/Ureka_Supply_detik.com_Outstream_1x1_280823', [1,1], 'div-gpt-ad-1728960538587-0').addService(googletag.pubads());
//googletag.defineSlot('/3407884/Ureka_Supply_detik.com_Outstream_1x1_280823', [1, 1], 'div-gpt-ad-1693215311656-0').addService(googletag.pubads());

// gpt_staticdetail = googletag.defineSlot('/4905536/detik_mobile/news/static_detail', [[300, 250], [1, 1]], 'div-gpt-ad-1708418164533-0').addService(googletag.pubads());

//gpt_staticbanner1 = googletag.defineSlot('/4905536/detik_mobile/news/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1587882110917-0').addService(googletag.pubads());

gpt_staticbanner2 = "";
//googletag.defineSlot('/4905536/detik_mobile/news/static_banner2', [[300, 250], [320, 100]], 'div-gpt-ad-1577859331586-0').addService(googletag.pubads());

gpt_newstag = googletag.defineSlot('/4905536/detik_mobile/news/newstag', [1, 1], 'div-gpt-ad-1621356624731-0').addService(googletag.pubads());

//gpt_parallax1fixesize = googletag.defineSlot('/4905536/detik_mobile/news/parallax1', [[300, 600], [300, 250]], 'div-gpt-ad-1576064857295-0').addService(googletag.pubads());

gpt_mmr = "";
//googletag.defineSlot('/4905536/detik_mobile/news/mmr', [300, 250], 'div-gpt-ad-1573456464455-0').addService(googletag.pubads());

gpt_stickystaticclose = googletag.defineSlot('/4905536/detik_mobile/news/sticky_static', [[320, 100], [320, 50], [1, 1]], 'div-gpt-ad-1534323596855-0').addService(googletag.pubads());

gpt_newsfeed1 = googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/newsfeed1', 'div-gpt-ad-1618867472047-0').addService(googletag.pubads());

gpt_newsfeed2 = "";
//googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/newsfeed2', 'div-gpt-ad-1726396949342-0').addService(googletag.pubads());

gpt_newsfeed3 = googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/newsfeed3', 'div-gpt-ad-1660762904035-0').addService(googletag.pubads());


//googletag.defineSlot('/4905536/detik_mobile/news/mega_billboard', [1, 1], 'div-gpt-ad-1589699833559-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/billboard', [1, 1], 'div-gpt-ad-1587602971860-0').addService(googletag.pubads()); 

gpt_staticbanner3 = "";
//googletag.defineSlot('/4905536/detik_mobile/news/static_banner3', [[300, 250], [320, 100]], 'div-gpt-ad-1577859695467-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/newsfeed1', ['fluid'], 'div-gpt-ad-1618873738996-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/newsfeed2', ['fluid'], 'div-gpt-ad-1536305617455-0').setTargeting('pos', ['newsfeed2']).addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/newsfeed3', ['fluid', [350, 100]], 'div-gpt-ad-1542786296585-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/inbetween', [1, 1], 'div-gpt-ad-1597625117023-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/inbetween', [300, 250], 'div-gpt-ad-1700583348472-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/newstag', [1, 1], 'div-gpt-ad-1621356624731-0').addService(googletag.pubads());

//gpt_hiddenquiz = googletag.defineSlot('/4905536/detik_mobile/news/hiddenquiz', [1, 1], 'div-gpt-ad-1622029836977-0').addService(googletag.pubads());

gpt_stickystatic = "";

//gpt_newstag = googletag.defineOutOfPageSlot('/4905536/detik_mobile/news/newstag', 'div-gpt-ad-1633510889560-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/partner_box', [1, 1], 'div-gpt-ad-1654316658317-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/news/newsfeed_nhl', [320, 100], 'div-gpt-ad-1655661164004-0').addService(googletag.pubads());

//gpt_parallax2 = googletag.defineSlot('/4905536/detik_mobile/news/parallax2', [[1, 1], [300, 250], [300, 600]], 'div-gpt-ad-1576065435299-0').addService(googletag.pubads());



//googletag.defineSlot('/4905536/detik_mobile/news/cb_internal', [300, 250], 'div-gpt-ad-1707828025081-0').addService(googletag.pubads());



gpt_slot_objects.push(gpt_megabillboard2, gpt_parallax, gpt_billboard, gpt_newsfeed3, gpt_staticbanner1, gpt_stickystaticclose);

//conditional empty gpt_parallax2
//if (document.getElementById('div-gpt-ad-1576065435299-0') != null) {
//gpt_slot_objects.push(gpt_parallax2);
//}


//conditional empty static detail 
// if (document.getElementById('div-gpt-ad-1728960538587-0') != null) {
// gpt_slot_objects.push(window.uk_delivery_1728960538587);
// }

//conditional empty static detail 
// if (document.getElementById('div-gpt-ad-1708418164533-0') != null) {
// gpt_slot_objects.push(gpt_staticdetail);
// }

//conditional empty parallax1  
// if (document.getElementById('div-gpt-ad-1576067331035-0') != null) {
// gpt_slot_objects.push(gpt_parallax1);
// }

//conditional empty parallax 
// if (document.getElementById('div-gpt-ad-1730344309218-0') != null) {
// gpt_slot_objects.push(window.uk_delivery_1728960538587);
// }

//conditional empty parallax 1
 // if (document.getElementById('div-gpt-ad-1576064857295-0') != null) {
 // gpt_slot_objects.push(gpt_parallax1fixesize);
 // }

//conditional empty newsfeed 1
if (document.getElementById('div-gpt-ad-1618867472047-0') != null) {
gpt_slot_objects.push(gpt_newsfeed1);
}

//conditional empty newsfeed 2
// if (document.getElementById('div-gpt-ad-1726396949342-0') != null) {
// gpt_slot_objects.push(gpt_newsfeed2);
// }

//conditional empty newsfeed 3
if (document.getElementById('div-gpt-ad-1660762904035-0') != null) {
gpt_slot_objects.push(gpt_newsfeed3);
}

//conditional empty inbetween 
if (document.getElementById('div-gpt-ad-1658811024221-0') != null) {
gpt_slot_objects.push(gpt_inbetween);
}

//conditional empty hiddenquiz 
//if (document.getElementById('div-gpt-ad-1622029836977-0') != null) {
//gpt_slot_objects.push(gpt_hiddenquiz);
//}

//conditional empty newstag 
 if (document.getElementById('div-gpt-ad-1621356624731-0') != null) {
 gpt_slot_objects.push(gpt_newstag);
 }

googletag.pubads().addEventListener('slotRenderEnded', function(event) {

if (event.slot == gpt_newsfeed1 && !event.isEmpty) {
var $head = $("#div-gpt-ad-1618867472047-0 iframe").contents().find("head");
var url = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head.append($("<link />", {
rel: "stylesheet",
href: url,
type: "text/css"
}));
var Adv1 = $("#div-gpt-ad-1618867472047-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv1.length ){
$("#div-gpt-ad-1618867472047-0 iframe").height("1px");
}
}

if (event.slot == gpt_newsfeed2 && !event.isEmpty) {
var $head2 = $("#div-gpt-ad-1726396949342-0 iframe").contents().find("head");
var url2 = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head2.append($("<link />", {
rel: "stylesheet",
href: url2,
type: "text/css"
}));
var Adv2 = $("#div-gpt-ad-1726396949342-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv2.length ){
$("#div-gpt-ad-1726396949342-0 iframe").height("1px");
}
}

if (event.slot == gpt_newsfeed3 && !event.isEmpty) {
var $head3 = $("#div-gpt-ad-1660762904035-0 iframe").contents().find("head");
var url3 = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head3.append($("<link />", {
rel: "stylesheet",
href: url3,
type: "text/css"
}));
var Adv3 = $("#div-gpt-ad-1660762904035-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv3.length ){
$("#div-gpt-ad-1660762904035-0 iframe").height("1px");
}
}


if (event.slot == gpt_megabillboard2 && !event.isEmpty) {
var containsAdMg2 = !event.isEmpty,
widthMg2 = event.size[0],
heightMg2 = event.size[1];
$('.megabillboard').css({
'background-color': '#000',
'height': '522px'
});
$(".ads-slot-mb-container, .megabillboard_container, .MgSlot").css(
"background-color", "#000");
$(".megabillboard-close").css("color", "#fff");
 setTimeout(function () {
     $("html, body").css({
         'overflow': '',
         'height': 'auto'
     });
 }, 3000);
if (heightMg2 == 1 && widthMg2 == 1) {
$('.megabillboard_container').height('510px');
}
window.onscroll = function () {
MegaBillSticky();
};
}


if (event.slot == gpt_billboard && !event.isEmpty) {
var containsAdBB = !event.isEmpty,
widthBB = event.size[0],
heightBB = event.size[1];
$(".bb .scrollpage").show();
var divazan = document.querySelectorAll("#tsbillboard");
for (var az = 0; az < 4; az++) {
divazan[az].remove();
}
}

if (event.slot == gpt_staticbanner1 && !event.isEmpty){
var containsAdSB1 = !event.isEmpty,
widthSB1 = event.size[0],
heightSB1 = event.size[1];
$("#sb1").css("width","100%");
$(".sb1 .scrollpage").show();
// var divsToRemoveMR = document.querySelectorAll(".carousel-container");
// for (var i = 0; i < 4; i++) {
// divsToRemoveMR[i].remove();
// }
}
if (event.slot == gpt_staticbanner2 && !event.isEmpty){
var containsAdSB = !event.isEmpty,
widthSB2 = event.size[0],
heightSB2 = event.size[1];
$("#sb2").css("width","100%");
$(".sb2 .scrollpage").show();
}
if (event.slot == gpt_staticbanner3 && !event.isEmpty){
var containsAdSB3 = !event.isEmpty,
widthSB3 = event.size[0],
heightSB3 = event.size[1];
$("#sb3").css("width","100%");
$(".sb3 .scrollpage").show();
}
if (event.slot == gpt_mmr && !event.isEmpty){
var containsAdMMR = !event.isEmpty,
widthmmr = event.size[0],
heightmmr = event.size[1];
$("#mmr").css("width","100%");
$(".mmr .scrollpage").show();
}
// if (event.slot == gpt_staticdetail && !event.isEmpty) {
// var divsd = document.querySelector(".staticdetail_ads").children;
// if (divsd.length > 2) {
// setTimeout(() => {
// divsd[0].remove();
// }, 1000);
// }
// }
if (event.slot == gpt_stickystaticclose && !event.isEmpty) {
var containsAd = !event.isEmpty,
width = event.size[0],
height = event.size[1];
if (height == 50 && width == 320) {
setTimeout(function () {
$('.ssb-close').css("display", "block");
}, 3000);
$(".footer_banner").show();
$(".back-top").animate({ "bottom": "180px" }, 300);
$(".sticky-share").css({ "bottom": "120px" });
$(".notif_breakingnews").css("bottom", "120px");
$(".bottom-sticky").css("bottom", "120px");
$('.floatingshare').css("bottom", "110px");
$('a[dtr-sec="back to top"]').css("bottom", "110px");
}
if (height == 1 && width == 1) {
$('.footer_banner').hide();
}
if (height == 100 && width == 320) {
setTimeout(function () {
$('.ssb-close').css("display", "block");
}, 3000);
$(".footer_banner").show();
$(".back-top").animate({ "bottom": "217px" }, 300);
$(".share-sticky").css({ "bottom": "160px" });
$(".notif_breakingnews").css("bottom", "160px");
$(".bottom-sticky").css("bottom", "160px");
$('.floatingshare').css("bottom", "160px");
$('.breaking-detikpagi').css("bottom", "160px");
$('a[dtr-sec="back to top"]').css("bottom", "160px");
}
if (height == 50 && width == 360) {
setTimeout(function () {
$('.ssb-close').css("display", "block");
}, 5000);
$(".footer_banner").show();
$(".back-top").animate({ "bottom": "180px" }, 300);
$(".share-sticky").css({ "bottom": "120px" });
$(".notif_breakingnews").css("bottom", "120px");
$(".bottom-sticky").css("bottom", "120px");
$('.floatingshare').css("bottom", "110px");
$('a[dtr-sec="back to top"]').css("bottom", "110px");
}
}

if (event.slot == gpt_stickystatic && !event.isEmpty){
$('.footer_banner').show();
}



});

googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().setTargeting('test', ['refresh']);
googletag.pubads().setTargeting('site', ['detikcom']);
googletag.pubads().setTargeting('section', ['news']);
googletag.pubads().setTargeting('medium', ['mobile']);
googletag.pubads().setTargeting('keyvalue', dfp_keywords);
googletag.pubads().setTargeting('Keyword_tag', dfp_keywords);
googletag.pubads().setTargeting('militaryconflict', dfp_keywords);
googletag.pubads().setTargeting('ilegal_drugs', dfp_keywords);
googletag.pubads().setTargeting('adult', dfp_keywords);
googletag.pubads().setTargeting('death_injury', dfp_keywords);
googletag.pubads().setTargeting('hate_speech', dfp_keywords);
googletag.pubads().setTargeting('spam_harmfulsite', dfp_keywords);
googletag.pubads().setTargeting('tobacco', dfp_keywords);
googletag.pubads().setTargeting('disaster', dfp_keywords);
googletag.pubads().setTargeting('politic', dfp_keywords);
googletag.pubads().setTargeting('obscenity', dfp_keywords);
googletag.pubads().setTargeting('terorism', dfp_keywords);
googletag.pubads().setTargeting('arms', dfp_keywords);
googletag.pubads().setTargeting('crime', dfp_keywords);
googletag.pubads().setTargeting('online_piracy', dfp_keywords);
googletag.pubads().setTargeting('Brandsafety_IAS', dfp_keywords);
googletag.pubads().setTargeting('Healthy_Food', dfp_keywords);googletag.pubads().setTargeting('Luxury_Shoppers', dfp_keywords);googletag.pubads().setTargeting('Islamic_Content', dfp_keywords);googletag.pubads().setTargeting('Music_Lovers', dfp_keywords);googletag.pubads().setTargeting('Kpop', dfp_keywords);googletag.pubads().setTargeting('Food_Recipe', dfp_keywords);googletag.pubads().setTargeting('Health_and_Fitness', dfp_keywords);googletag.pubads().setTargeting('Technophiles', dfp_keywords);googletag.pubads().setTargeting('Racket', dfp_keywords);googletag.pubads().setTargeting('Photography', dfp_keywords);googletag.pubads().setTargeting('Value_Shoppers', dfp_keywords);
googletag.pubads().setTargeting('Pet_Lover', dfp_keywords);
googletag.pubads().collapseEmptyDivs();
googletag.enableServices();

// lazyLoad
/*
   googletag.pubads().enableLazyLoad({
   fetchMarginPercent: -1,
   renderMarginPercent: 20,
   mobileScaling: 2.0
   });
   
   googletag.pubads().addEventListener("slotRequested", (event) => {
           console.log("Fetching:",event.slot.getSlotElementId(), "fetched");
         });
   
        googletag.pubads().addEventListener("slotOnload", (event) => {
          console.log("Rendering:",event.slot.getSlotElementId(), "rendered");
        });
*/

// request pbjs bids when it loads
  pbjs.que.push(function() {
    pbjs.rp.requestBids({ 
callback: callAdserver, gptSlotObjects: gpt_slot_objects.filter(function(element, index) { 
return (element) ? true : false; }) });
});

  // failsafe in case PBJS doesn't load
  setTimeout(function() {
    callAdserver(gpt_slot_objects);
  }, 2000);
});

function callAdserver(gptSlots) {
    if (pbjs.adserverCalled) return;
    pbjs.adserverCalled = true;
    googletag.pubads().refresh(gptSlots);
  }    
    

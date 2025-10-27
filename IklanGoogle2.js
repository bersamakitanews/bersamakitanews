var gptadslots = [];
window.googletag = window.googletag || {cmd: []};
let anchorSlot;

// initialize pbjs
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
    
gpt_slot_objects = [];

  googletag.cmd.push(function() {

//Adslot 1 declaration
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    // This slot is allowed to refresh, as it contains the targeting keys which have been declared for refresh.

           gpt_staticbanner1 = googletag.defineSlot('/4905536/detik_mobile/wp/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1577803021914-0').
           setTargeting(REFRESH_KEY, REFRESH_VALUE).
           setTargeting('test', 'event').
           addService(googletag.pubads());
           
           
           // gpt_nhl4 = googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed_nhl', [[320, 100], [300, 250], [320, 250]], 'div-gpt-ad-1636555532947-0').
           // setTargeting(REFRESH_KEY, REFRESH_VALUE).
           // setTargeting('test', 'event').
           // addService(googletag.pubads());

           
           //gpt_staticbanner3 = googletag.defineSlot('/4905536/detik_mobile/wp/static_banner3', [[320, 100], [300, 250]], 'div-gpt-ad-1577803073685-0').
           //setTargeting(REFRESH_KEY, REFRESH_VALUE).
         //  setTargeting('test', 'event').
           //addService(googletag.pubads());

//             
//         //gpt_cbinternal = googletag.defineSlot('/4905536/detik_mobile/wp/cb_internal', [300, 250], 'div-gpt-ad-1707842985557-0').
//             //setTargeting(REFRESH_KEY, REFRESH_VALUE).
//             //setTargeting('test', 'event').
//             //addService(googletag.pubads());
//             
            // gpt_megabillboard2 = googletag.defineSlot('/4905536/detik_mobile/wp/mega_billboard', [320, 480], 'div-gpt-ad-1620842876816-0').
            //  setTargeting(REFRESH_KEY, REFRESH_VALUE).
            //  setTargeting('test', 'event').
            //  addService(googletag.pubads());
            
            // gpt_mmr = googletag.defineSlot('/4905536/detik_mobile/wp/mmr', [300, 250], 'div-gpt-ad-1574101629418-0').
            // setTargeting(REFRESH_KEY, REFRESH_VALUE).
            //  setTargeting('test', 'event').
            //  addService(googletag.pubads());

            
             gpt_parallax1 = googletag.defineSlot('/4905536/detik_mobile/wp/parallax1', [[300, 250], [300, 600]], 'div-gpt-ad-1562858316643-0').
             setTargeting(REFRESH_KEY, REFRESH_VALUE).
            addService(googletag.pubads());
            
            //gpt_parallax2 = googletag.defineSlot('/4905536/detik_mobile/wp/parallax2', [[300, 250], [300, 600]], 'div-gpt-ad-1575445867707-0').
            //setTargeting(REFRESH_KEY, REFRESH_VALUE).
            //addService(googletag.pubads());
            
             gpt_stickystaticclose = googletag.defineSlot('/4905536/detik_mobile/wp/sticky_static', [[320, 100], [320, 50], [1, 1]], 'div-gpt-ad-1561342138552-0').
             setTargeting(REFRESH_KEY, REFRESH_VALUE).
            setTargeting('test', 'event').
             addService(googletag.pubads());
             
             // gpt_parallax2 = googletag.defineSlot('/4905536/detik_mobile/wp/parallax2', [[300, 250], [300, 600]], 'div-gpt-ad-1575445867707-0').
             //   setTargeting(REFRESH_KEY, REFRESH_VALUE).
             // addService(googletag.pubads());

            
            // gpt_billboard = googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [[320, 150], [320, 100], [1, 1]], 'div-gpt-ad-1577802756221-0').
            // setTargeting(REFRESH_KEY, REFRESH_VALUE).
            // addService(googletag.pubads());
            
            // gpt_djarum = googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [[320, 150], [320, 100], [1, 1]], 'div-gpt-ad-1577802756221-0').
            // setTargeting(REFRESH_KEY, REFRESH_VALUE).
            // addService(googletag.pubads());
            
            // gpt_staticbanner1 = googletag.defineSlot('/4905536/detik_mobile/wp/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1577803021914-0').
            // setTargeting(REFRESH_KEY, REFRESH_VALUE).
            // addService(googletag.pubads());

// 
//       
    // Number of seconds to wait after the slot becomes viewable.
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 15;
    googletag.pubads().addEventListener('impressionViewable', function(event) {
      var slot = event.slot;
      if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
        setTimeout(function() {
          googletag.pubads().refresh([slot]);
        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
      }
    });
    
    
// Define an anchor ad slot

// anchorSlot = googletag.defineOutOfPageSlot(
// '/4905536/detik_mobile/wp/sticky_static',
// document.body.clientWidth <= 500
// ? googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
// : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
// );
// 
// if (anchorSlot) {
// anchorSlot.addService(googletag.pubads());
// console.log("Anchor is loading...");
// googletag.pubads().addEventListener('slotOnload', function(event) {
// if (anchorSlot === event.slot) {
// $(".back-top").animate({ "bottom": "217px" }, 300);
// $(".sticky-share").css({ "bottom": "160px" });
// $(".notif_breakingnews").css("bottom", "160px");
// $(".bottom-sticky").css("bottom", "160px");
// $('.floatingshare').css("bottom", "160px");
// $('.breaking-detikpagi').css("bottom", "160px");
// $('a[dtr-sec="back to top"]').css("bottom", "160px");
// console.log("Anchor is loaded.");
// }
// });
// }



gpt_megabillboard2 = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/mega_billboard', [320, 480], 'div-gpt-ad-1620842876816-0').addService(googletag.pubads());


//gpt_navbar2 = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/navbar2', [1, 1], 'div-gpt-ad-1736961037705-0').addService(googletag.pubads());



gpt_billboard = googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [[320, 150], [320, 100]], 'div-gpt-ad-1577802756221-0').addService(googletag.pubads());


//googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [1, 1], 'div-gpt-ad-1577802756221-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [1, 1], 'div-gpt-ad-1577802756221-0').addService(googletag.pubads());


//gpt_staticbanner1 = googletag.defineSlot('/4905536/detik_mobile/wp/static_banner1', [[300, 250], [320, 100]], 'div-gpt-ad-1577803021914-0').addService(googletag.pubads());

gpt_staticbanner2 = googletag.defineSlot('/4905536/detik_mobile/wp/static_banner2', [[320, 100], [300, 250]], 'div-gpt-ad-1577802938477-0').addService(googletag.pubads());

gpt_mmr = googletag.defineSlot('/4905536/detik_mobile/wp/mmr', [300, 250], 'div-gpt-ad-1574101629418-0').addService(googletag.pubads());

gpt_newsfeed1 = googletag.defineOutOfPageSlot('/4905536/detik_mobile/wp/newsfeed1', 'div-gpt-ad-1612604165904-0').addService(googletag.pubads());

gpt_newsfeed2 = googletag.defineOutOfPageSlot('/4905536/detik_mobile/wp/newsfeed2', 'div-gpt-ad-1612976376980-0').addService(googletag.pubads());

gpt_newsfeed3 = googletag.defineOutOfPageSlot('/4905536/detik_mobile/wp/newsfeed3', 'div-gpt-ad-1614957999670-0').addService(googletag.pubads());


//gpt_stickystaticclose = googletag.defineSlot('/4905536/detik_mobile/wp/sticky_static', [[320, 100], [320, 50]], 'div-gpt-ad-1561342138552-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/mega_billboard', [1, 1], 'div-gpt-ad-1631182334408-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/billboard', [1, 1], 'div-gpt-ad-1587602738093-0').addService(googletag.pubads()); 

gpt_channelbox = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/channelbox', [320, 150], 'div-gpt-ad-1701231468866-0').addService(googletag.pubads());

gpt_staticbanner3 = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/static_banner3', [[320, 100], [300, 250]], 'div-gpt-ad-1577803073685-0').addService(googletag.pubads());

gpt_adv = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed2', [300, 250], 'div-gpt-ad-1679914928095-0').addService(googletag.pubads());

gpt_nhl4 = "";
//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed_nhl', [[320, 100], [300, 250], [320, 250]], 'div-gpt-ad-1636555532947-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed2', ['fluid'], 'div-gpt-ad-1535017525947-0').setTargeting('pos', ['newsfeed2']).addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed3', ['fluid'], 'div-gpt-ad-1592222274797-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed1', ['fluid'], 'div-gpt-ad-1535017465124-0').setTargeting('pos', ['newsfeed1']).addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_mobile/wp/newsfeed4', ['fluid', [320, 100]], 'div-gpt-ad-1535017641383-0').setTargeting('pos', ['newsfeed4']).addService(googletag.pubads());

gptadslots[0] = "";

//googletag.defineSlot('/4905536/detik_mobile/wp/sticky_static', [1, 1], 'div-gpt-ad-1723053904610-0').addService(googletag.pubads());

// gpt_parallax1 = googletag.defineSlot('/4905536/detik_mobile/wp/parallax1', [[300, 250], [300, 600]], 'div-gpt-ad-1562858316643-0').addService(googletag.pubads());
//    
//gpt_parallax2 = googletag.defineSlot('/4905536/detik_mobile/wp/parallax2', [[300, 250], [300, 600]], 'div-gpt-ad-1575445867707-0').addService(googletag.pubads());

//googletag.defineOutOfPageSlot('/4905536/detik_mobile/wp/newsfeed_nhl', 'div-gpt-ad-1612975990445-0').addService(googletag.pubads());



gpt_slot_objects.push(gpt_parallax1,  gpt_billboard, gpt_newsfeed3, gpt_newsfeed1, gpt_newsfeed2, gpt_mmr, gpt_stickystaticclose, gpt_staticbanner1, gpt_staticbanner2);

//conditional empty cb internal 
//if (document.getElementById('div-gpt-ad-1707842985557-0') != null) {
//gpt_slot_objects.push(gpt_cbinternal);
//}

//conditional empty gpt_nhl4
// if (document.getElementById('div-gpt-ad-1636555532947-0') != null) {
// gpt_slot_objects.push(gpt_nhl4);
// }

//conditional empty parallax 1
//if (document.getElementById('div-gpt-ad-1562858316643-0') != null) {
//gpt_slot_objects.push(gpt_parallax1);
//$('.para1').show();
//}

// //conditional empty newsfeed 1
// if (document.getElementById('div-gpt-ad-1612604165904-0') != null) {
// gpt_slot_objects.push(gpt_newsfeed1);
// }
// 
// //conditional empty newsfeed 2
if (document.getElementById('div-gpt-ad-1612976376980-0') != null) {
gpt_slot_objects.push(gpt_newsfeed2);
}

//conditional empty newsfeed 3
// if (document.getElementById('div-gpt-ad-1614957999670-0') != null) {
// gpt_slot_objects.push(gpt_newsfeed3);
// }

googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    
if (event.slot == gpt_newsfeed1 && !event.isEmpty) {
var $head = $("#div-gpt-ad-1612604165904-0 iframe").contents().find("head");
var url = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head.append($("<link />", {
rel: "stylesheet",
href: url,
type: "text/css"
}));
var Adv1 = $("#div-gpt-ad-1612604165904-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv1.length ){
$("#div-gpt-ad-1612604165904-0 iframe").height("1px");
}
}

if (event.slot == gpt_newsfeed2 && !event.isEmpty) {
var $head2 = $("#div-gpt-ad-1612976376980-0 iframe").contents().find("head");
var url2 = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head2.append($("<link />", {
rel: "stylesheet",
href: url2,
type: "text/css"
}));
var Adv2 = $("#div-gpt-ad-1612976376980-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv2.length ){
$("#div-gpt-ad-1612976376980-0 iframe").height("1px");
}
}

if (event.slot == gpt_newsfeed3 && !event.isEmpty) {
var $head3 = $("#div-gpt-ad-1614957999670-0 iframe").contents().find("head");
var url3 = "https://cdnstatic.detik.com/live/_rmbassets/newsfeed/Mob-detikcomRedesigner.css";
$head3.append($("<link />", {
rel: "stylesheet",
href: url3,
type: "text/css"
}));
var Adv3 = $("#div-gpt-ad-1614957999670-0 iframe").contents().find(".AdvDetikcomRedesign");
if(Adv3.length ){
$("#div-gpt-ad-1614957999670-0 iframe").height("1px");
}
}
   
if (event.slot == gpt_adv && !event.isEmpty){
var containsAdadv = !event.isEmpty,
widthadv = event.size[0],
heightadv = event.size[1];
$("#adv").css("width","100%");
$(".adv .scrollpage").show();
}

// if (event.slot == gpt_cbinternal && !event.isEmpty) {
// var containsJA = !event.isEmpty,
// widthJA = event.size[0],
// heightJA = event.size[1];
// var divJA = document.querySelectorAll(".imsakiyah");
// for (var ja = 0; ja < 2; ja++) {
// divJA[ja].remove();
// }
// }

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
if (heightMg2 == 1 && widthMg2 == 1) {
$('.megabillboard_container').height('510px');
}
window.onscroll = function () {
// MegaBillSticky();
};
}




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
$(".sticky-share").css({ "bottom": "160px" });
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
$(".sticky-share").css({ "bottom": "120px" });
$(".notif_breakingnews").css("bottom", "120px");
$(".bottom-sticky").css("bottom", "120px");
$('.floatingshare').css("bottom", "110px");
$('a[dtr-sec="back to top"]').css("bottom", "110px");
}
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

if (event.slot == gpt_channelbox && !event.isEmpty) {
var containsAdCB = !event.isEmpty,
widthCB = event.size[0],
heightCB = event.size[1];
$(".bb .scrollpage").show();
}

if (event.slot == gpt_staticbanner1 && !event.isEmpty){
var containsAdSB1 = !event.isEmpty,
widthSB1 = event.size[0],
heightSB1 = event.size[1];
//$("#sb1").css("width","100%");
$(".sb1 .scrollpage").show();
}
if (event.slot == gpt_staticbanner2 && !event.isEmpty){
var containsAdSB2 = !event.isEmpty,
widthSB2 = event.size[0],
heightSB2 = event.size[1];
//$("#sb2").css("width","100%");
$(".sb2 .scrollpage").show();
}
if (event.slot == gpt_staticbanner3 && !event.isEmpty){
var containsAdSB3 = !event.isEmpty,
widthSB3 = event.size[0],
heightSB3 = event.size[1];
//$("#sb3").css("width","100%");
$(".sb3 .scrollpage").show();
}
if (event.slot == gpt_nhl4 && !event.isEmpty){
var containsAdNHL4 = !event.isEmpty,
widthNHL4 = event.size[0],
heightNHL4 = event.size[1];
$("#nhl4").css("width","100%");
$(".nhl4 .scrollpage").show();
}
if (event.slot == gpt_mmr && !event.isEmpty){
var containsAdMMR = !event.isEmpty,
widthmmr = event.size[0],
heightmmr = event.size[1];
$("#mmr").css("width","100%");
$(".mmr .scrollpage").show();
}


if (event.slot == gptadslots[0] && !event.isEmpty){
$('.footer_banner').show();
}

});

googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().setTargeting('test', ['refresh']);
googletag.pubads().setTargeting('site', ['detikcom']).setTargeting('section', ['home']).setTargeting('medium', ['mobile']);
googletag.pubads().collapseEmptyDivs(true);
googletag.enableServices();


// lazyLoad

// googletag.pubads().enableLazyLoad({
// fetchMarginPercent: -1,
// renderMarginPercent: 20,
// mobileScaling: 2.0
// });
// 
// googletag.pubads().addEventListener("slotRequested", (event) => {
// console.log("Fetching:",event.slot.getSlotElementId(), "fetched");
// });
// 
// googletag.pubads().addEventListener("slotOnload", (event) => {
// console.log("Rendering:",event.slot.getSlotElementId(), "rendered");
// });


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

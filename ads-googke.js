var gptadslots = [];window.googletag = window.googletag || {cmd: []};var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];gpt_slot_objects = [];googletag.cmd.push(function()

{googletag.defineSlot('bersamakitanews', [[300, 250]]).addService(
googletag.pubads());gpt_megabillboard2 = googletag.defineSlot('/4905536/detik_mobile/sport/mega_billboard', [320, 480], 'div-gpt-ad-1577933762143-0').addService(googletag.pubads());

gpt_slot_objects.push(gpt_megabillboard2);googletag.pubads().addEventListener('slotRenderEnded', function(event) {if (event.slot == gpt_megabillboard2 && !event.isEmpty){
var containsAdMg2 = !event.isEmpty,widthMg2 = event.size[0],heightMg2 =event.size[1];

$('.megabillboard').css({'background-color': '#000','height': '522px'});                                                                                                                                              
$(".ads-slot-mb-container, .megabillboard_container, .MgSlot").css("background-color", "#000");
$(".megabillboard-close").css("color", "#fff");

if (heightMg2 == 1 && widthMg2 == 1) {$('.megabillboard_container').height('510px');}

window.onscroll = function () {
MegaBillSticky();};}});googletag.pubads().enableSingleRequest();googletag.pubads().disableInitialLoad();googletag.pubads().setTargeting('test', ['refresh']);
googletag.pubads().setTargeting('site', ['bersamakitanews']).setTargeting('section', ['home']).setTargeting('medium', ['mobile']);googletag.pubads().collapseEmptyDivs(true);googletag.enableServices();

setTimeout(function() {callAdserver(gpt_slot_objects);}, 2000);});function callAdserver(gptSlots) {if (pbjs.adserverCalled) return;pbjs.adserverCalled = true;googletag.pubads().refresh(gptSlots);}

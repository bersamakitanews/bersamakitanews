function MegaBillSticky() {
$(document).ready(function () {
var headerWoli = document.querySelector("header");
headerWoli.classList.add("noSticky");
window.addEventListener("scroll", function (e) {
var shrinkOn = 520;
var distanceY = window.pageYOffset || document.documentElement.scrollTop;
if (distanceY > shrinkOn) {
headerWoli.classList.add("yeSticky");
headerWoli.classList.remove("noSticky");
} else {
headerWoli.classList.add("noSticky");
headerWoli.classList.remove("yeSticky");
}
});
function ScaleStickyMg() {
var scrollState = 'top';
var scrollPos = $(window).scrollTop();
if ((scrollPos >= 200) && (scrollState === 'top')) {
$('#megabillboard').addClass('Mg');
$('#MgSticky').addClass('Mb_sticky');
$('#MgContainer').addClass('Mg_Container');
$('#MgSlot').addClass('Mg_Slot');
scrollState = 'scrolled';
}
}
ScaleStickyMg();
$(window).scroll(function () {
ScaleStickyMg();
var scrollPos2 = $(window).scrollTop();
if (scrollPos2 <= 200) {
$('.MgSticky').removeClass('Mb_sticky');
$('.MgContainer').removeClass('Mg_Container');
$('.MgSlot').removeClass('Mg_Slot');
$('.MgContainer').css('opocity', 1);
}
});
setTimeout(function () {
$('.megabillboard').removeClass('Mg');
$('.MgSlot').removeClass('Mg_Slot');
$('.MgSticky').removeClass('Mb_sticky');
$('.MgContainer').removeClass('Mg_Container');
$('.megabillboard').removeAttr('id');
$('.MgContainer').removeAttr('id');
$('.MgSticky').removeAttr('id');
$('.MgSlot').removeAttr('id');
}, 5000);
});
}
$('.megabillboard-close').click(function () {
$('.megabillboard, .megabillboard iframe').slideUp();
});
$("html, body").css({
'overflow': 'hidden',
'height': '100%'
});
setTimeout(function () {
$("html, body").css({
'overflow': '',
'height': 'auto'
});
}, 1000);

function update_title(){var lasturi = window.location.pathname.split("/").pop().replace(/[?#].*/g,'');if( !isNaN(lasturi) ) {
$.ajax({type: 'GET', url: 'bersamakitanews.com',
data: {param:lasturi, nocache:true},
success: function(resp) {
window.parent.postMessage({
'is_next': resp.title,}, "*");},error: function(jqxhr, status, exception) {
console.log('aevp',jqxhr);console.log('aevp_',status);console.log('aevp_',exception);}});}}

function is_embeded(){var reff = document.referrer;if(reff.indexOf("/embed/") !== -1 ){update_title();return true;}
if(reff.indexOf("bersamakitanews.com") !== -1){return false;}return true;}

function is_internal() {let isAllow = 'false';let referrer = document.referrer;if( (referrer.indexOf("bersamakitanews.com") !== -1 || referrer.indexOf("bersamakitanews.com") !== -1) && isAllow == 'true' ){return true;}return false;}

var videos= [];
var video_url= "https://bersamakitanews.com";
var video_title = " ";
var video_id = 240314147;
var program_id = 221213591;
var publish_date = 1710420693;
var dtkAdRules = null;
var dtkMagniteStatus = false;
var dtkAdUnit = '';
var dtmac = "acc-tv"
var dtmacsub = "mobile"
var keyword_ads = "";
var video_subcategory = " ";
var video_service_id = "2a4da8881ad3401d81b6ab417601913f";

var dtkMagniteStatus=true; var dtkAdRules= 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x360&iu=/4905536/20detik_mobile/detikupdate&impl=s&gdfp_req=1&env=vp&output=vmap&ciu_szs=300x250&ad_rule=1&cmsid=2477608&vid='+video_id+'&unviewed_position_start=1&max_ad_duration=30000&url='+encodeURIComponent(location.href)+'&description_url='+encodeURIComponent( video_title.replace(/%/g," Persen") )+'&cust_params='+encodeURIComponent(video_subcategory)+'&correlator='+new Date().getTime();

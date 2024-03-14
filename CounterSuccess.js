function numberWithCommas(x) {return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");}

function successHandler(msg) {let numberFormatted = numberWithCommas(msg.count);
$('#counter-success').html(numberFormatted + " sedang menonton");}

function errorHandler(msg) {console.log('conterview status:'.msg.statusText);return;}

var defaultConfig = {channel:'20detik-livestreaming',successCallback:successHandler,errorCallback:errorHandler,requestWinPostMsg:true};bersamakitanewsLiveUserCounter.setConfig(defaultConfig);

import{initializeApp}from"https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";import{deleteToken,getMessaging,getToken,onMessage}from"https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js";const vapidKey="BFZ4POJYaMViJJzDML526rZqFoyur8qGNbBvq9fod0b-F6-63mhcgOJ3dySUI3J_eNObadNy552TYtDu8nt-3JU",config={apiKey:"AIzaSyBfNbi1IZ2OE4QWtbwFePiI-_hU07F3Bno",authDomain:"bersamakitanews-26c17.firebaseapp.com",databaseURL:"https://detikcom-1363e.firebaseio.com",projectId:"detikcom-1363e",storageBucket:"detikcom-1363e.appspot.com",messagingSenderId:"256296223274",appId:"1:256296223274:web:aeff3711604208412af953",application:"dda038c1-3fea-46bc-8f76-bae2aaf00288"};initializeApp(config);const messaging=getMessaging();function requestToken(){getToken(messaging,{vapidKey:vapidKey}).then((e=>{e?sendTokenToServer(e):(console.log("No registration token available. Request permission to generate one."),setTokenSentToServer(!1))})).catch((e=>{console.log("An error occurred while retrieving token. ",e),setTokenSentToServer(!1),requestToken()}))}function sendTokenToServer(e){isTokenSentToServer()?console.log("Token already sent to server so won't send it again unless it changes"):(console.log("Sending token to server..."),sendTokenToAppsDev(e),setTokenSentToServer(!0))}function sendTokenToAppsDev(e){let o=3;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=4);let n=new FormData;n.append("application",config.application),n.append("token",e),n.append("device",o);let t=getCookieNotif("__dtma");""!==t&&n.append("uv",t);let i=new XMLHttpRequest;i.withCredentials=!0,i.onload=function(){i.status,i.responseText},i.open("POST","https://kayumanis.detik.com/api/media/",!0),i.send(n),setCookieNotif("__fcm_token",e),saveDeviceTokenToIndexedDB(e,o)}function isTokenSentToServer(){return 1==window.localStorage.getItem("sentToServer")}function setTokenSentToServer(e){window.localStorage.setItem("sentToServer",e?1:0),e||deleteDeviceFromIndexedDB()}function requestPermission(){console.log("Requesting permission..."),Notification.requestPermission().then((e=>{"granted"===e?(requestToken(),console.log("Notification permission granted.")):console.log("Unable to get permission to notify.")}))}function deleteTokenFromFirebase(){getToken(messaging,{vapidKey:vapidKey}).then((e=>{deleteToken(messaging).then((()=>{console.log("Token deleted.",e),setTokenSentToServer(!1)})).catch((e=>{console.log("Unable to delete token. ",e),setTokenSentToServer(!1)}))})).catch((e=>{console.log("Error retrieving Instance ID token. ",e),setTokenSentToServer(!1)}))}function getCookieNotif(e){for(var o=e+"=",n=decodeURIComponent(document.cookie).split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return""}function setCookieNotif(e,o,n){var t="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),t="; expires="+i.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function resendToken(){getToken(messaging,{vapidKey:vapidKey}).then((function(e){if(e){var o=3;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=4),$.post("https://kayumanis.detik.com/api/validation/",{token:e,device:o,application:config.application}).done((function(e){"invalid"===e.token&&(deleteTokenFromFirebase(),deleteDeviceFromIndexedDB())}))}else setTokenSentToServer(!1)}))}function initNotif(){isTokenSentToServer()?resendToken():requestPermission()}function saveDeviceTokenToIndexedDB(e,o){let n=indexedDB.open("device-token-database",1);try{n.onupgradeneeded=function(e){e.target.result.createObjectStore("device-token-store",{keyPath:"id"})},n.onsuccess=function(n){n.target.result.transaction("device-token-store","readwrite").objectStore("device-token-store").add({id:"device-token",token:e,device:o})},n.onerror=function(e){console.log("Error opening indexedDB: ",e)}}catch(e){console.log("Cannot save device to indexedDB",e)}}function deleteDeviceFromIndexedDB(){let e=indexedDB.open("device-token-database",1);try{e.onupgradeneeded=function(e){e.target.result.createObjectStore("device-token-store",{keyPath:"id"})},e.onsuccess=function(e){e.target.result.transaction("device-token-store","readwrite").objectStore("device-token-store").delete("device-token")},e.onerror=function(e){console.log("Error opening indexedDB: ",e)}}catch(e){console.log("Cannot delete device from indexedDB",e)}}onMessage(messaging,(e=>{console.log("Message received. ",e);const o=e.data.title,n={body:e.data.content,icon:e.data.icon};if("Notification"in window){if("granted"===Notification.permission){let t=new Notification(o,n);getToken(messaging,{vapidKey:vapidKey}).then((e=>{indexedDB.open("device-token-database",1).onsuccess=function(o){let n="3",t=o.target.result.transaction("device-token-store","readonly").objectStore("device-token-store").get("device-token");t.onsuccess=function(o){try{n=o.target.result.device,n=n.toString()}catch(o){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(n="4"),saveDeviceTokenToIndexedDB(e,n),console.log("Device not found in indexedDB, and process saving device to indexedDB: ",o)}let t=JSON.stringify({token:e,application:config.application,device:n});$.ajax({type:"POST",url:"https://kayumanis.detik.com/api/verify/",data:t,contentType:"application/json"})},t.onerror=function(e){console.log("Error getting device from indexedDB: ",e)}}})).catch((e=>{console.log(e)})),t.onclick=function(o){o.preventDefault(),window.open(e.data.url,"_blank"),t.close(),getToken(messaging,{vapidKey:vapidKey}).then((o=>{let n=e.data.app,t=e.data.id,i=3;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(i=4),$.ajax({type:"post",url:"https://kayumanis.detik.com/api/app_open/",data:{id:t,token:o,app:n,platform:i},success:function(e){console.log(e)}})})).catch((e=>{console.log(e)}))}}}else console.log("This browser does not support system notifications")})),initNotif();

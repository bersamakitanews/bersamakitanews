import{initializeApp}from"https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";import{deleteToken,getMessaging,getToken,onMessage}from'https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js';const vapidKey='BFZ4POJYaMViJJzDML526rZqFoyur8qGNbBvq9fod0b-F6-63mhcgOJ3dySUI3J_eNObadNy552TYtDu8nt-3JU';const config={apiKey:"AIzaSyBvjBbd_2g41OfCwP8XtI1w33RWZkVXyqY",authDomain:"detikcom-1363e.firebaseapp.com",databaseURL:"https://detikcom-1363e.firebaseio.com",projectId:"detikcom-1363e",storageBucket:"detikcom-1363e.appspot.com",messagingSenderId:"256296223274",appId:"1:256296223274:web:aeff3711604208412af953",application:"dda038c1-3fea-46bc-8f76-bae2aaf00288"}initializeApp(config);const messaging=getMessaging();onMessage(messaging,(payload)=>{console.log('Message received. ',payload);const notificationTitle=payload.data.title;const notificationOptions={body:payload.data.content,icon:payload.data.icon};if(!("Notification"in window)){console.log("This browser does not support system notifications");}else if(Notification.permission==="granted"){let notification=new Notification(notificationTitle,notificationOptions);getToken(messaging,{vapidKey:vapidKey}).then((currentToken)=>{let requestIndexDb=indexedDB.open('device-token-database',1);requestIndexDb.onsuccess=function(event){let device="3";let db=event.target.result;let request=db.transaction('device-token-store','readonly').objectStore('device-token-store').get("device-token");request.onsuccess=function(event){try{device=event.target.result.device;device=device.toString();}catch(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){device="4";}saveDeviceTokenToIndexedDB(currentToken,device);console.log("Device not found in indexedDB, and process saving device to indexedDB: ",e);}let data=JSON.stringify({token:currentToken,application:config.application,device:device});$.ajax({type:"POST",url:"https://kayumanis.detik.com/api/verify/",data:data,contentType:'application/json',});}request.onerror=function(event){console.log("Error getting device from indexedDB: ",event);}}}).catch((err)=>{console.log(err);});notification.onclick=function(event{event.preventDefault();window.open(payload.data.url,"_blank");notification.close();getToken(messaging,{vapidKey:vapidKey}).then((currentToken)=>{let app=payload.data.app;let id=payload.data.id;let platform=3;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){platform=4;}$.ajax({type:"post",url:"https://kayumanis.detik.com/api/app_open/",data:{id:id,token:currentToken,app:app,platform:platform},success:function(d){console.log(d);},});}).catch((err)=>{console.log(err);});};}});function requestToken(){getToken(messaging,{vapidKey:vapidKey}).then((currentToken)=>{if(currentToken){sendTokenToServer(currentToken);}else{console.log('No registration token available. Request permission to generate one.');setTokenSentToServer(false);}}).catch((err)=>{console.log('An error occurred while retrieving token. ',err);setTokenSentToServer(false);requestToken();});}function sendTokenToServer(currentToken){if(!isTokenSentToServer()){console.log("Sending token to server...");sendTokenToAppsDev(currentToken);setTokenSentToServer(true);}else{console.log("Token already sent to server so won't send it again "+"unless it changes");}}function sendTokenToAppsDev(currentToken){let url="https://kayumanis.detik.com/api/media/";let method="POST";let device=3;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){device=4;}let postData=new FormData();postData.append("application",config.application);postData.append("token",currentToken);postData.append("device",device);let uv=getCookieNotif("__dtma");if(uv!==""){postData.append("uv",uv);}let async=true;let request=new XMLHttpRequest();request.withCredentials=true;request.onload=function(){let status=request.status;let data=request.responseText;};request.open(method,url,async);request.send(postData);setCookieNotif('__fcm_token',currentToken);saveDeviceTokenToIndexedDB(currentToken,device);}function isTokenSentToServer(){if(window.localStorage.getItem("sentToServer")==1){return true;}return false;}function setTokenSentToServer(sent){window.localStorage.setItem("sentToServer",sent?1:0);if(!sent){deleteDeviceFromIndexedDB();}}function requestPermission(){console.log('Requesting permission...');Notification.requestPermission().then((permission)=>{if(permission==='granted'){requestToken();console.log("Notification permission granted.");}else{console.log('Unable to get permission to notify.');}});}function deleteTokenFromFirebase(){getToken(messaging,{vapidKey:vapidKey}).then((currentToken)=>{deleteToken(messaging).then(()=>{console.log('Token deleted.',currentToken);setTokenSentToServer(false);}).catch((err)=>{console.log('Unable to delete token. ',err);setTokenSentToServer(false);});}).catch((err)=>{console.log("Error retrieving Instance ID token. ",err);setTokenSentToServer(false);});}function getCookieNotif(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return"";}function setCookieNotif(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}document.cookie=name+"="+(value||"")+expires+"; path=/";}function resendToken(){getToken(messaging,{vapidKey:vapidKey}).then(function(currentToken){if(!currentToken){setTokenSentToServer(false);return;}var platform=3;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){platform=4;}$.post("https://kayumanis.detik.com/api/validation/",{token:currentToken,device:platform,application:config.application}).done(function(msg){if(msg.token==="invalid"){deleteTokenFromFirebase();deleteDeviceFromIndexedDB();}});});}function initNotif(){if(isTokenSentToServer()){resendToken();}else{requestPermission();}}function saveDeviceTokenToIndexedDB(currentToken,device){let requestIndexDb=indexedDB.open('device-token-database',1);try{requestIndexDb.onupgradeneeded=function(event){let db=event.target.result;db.createObjectStore('device-token-store',{keyPath:'id'});}requestIndexDb.onsuccess=function(event){let db=event.target.result;let transaction=db.transaction('device-token-store','readwrite');let objectStore=transaction.objectStore('device-token-store');let key="device-token";objectStore.add({'id':key,token:currentToken,device:device});}requestIndexDb.onerror=function(event){console.log("Error opening indexedDB: ",event);}}catch(e){console.log("Cannot save device to indexedDB",e);}}function deleteDeviceFromIndexedDB(){let requestIndexDb=indexedDB.open('device-token-database',1);try{requestIndexDb.onupgradeneeded=function(event){let db=event.target.result;db.createObjectStore('device-token-store',{keyPath:'id'});}requestIndexDb.onsuccess=function(event){let db=event.target.result;let transaction=db.transaction('device-token-store','readwrite');let objectStore=transaction.objectStore('device-token-store');objectStore.delete("device-token");}requestIndexDb.onerror=function(event){console.log("Error opening indexedDB: ",event);}}catch(e){console.log("Cannot delete device from indexedDB",e);}}initNotif();

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyA9IBvV4t6TNf-ls3-alCUV_1X0GJVrEnk",
  authDomain: "web-push-ec77f.firebaseapp.com",
  projectId: "web-push-ec77f",
  storageBucket: "web-push-ec77f.firebasestorage.app",
  messagingSenderId: "595418503239",
  appId: "1:595418503239:web:8d404da96ead6cab5df962",
  measurementId: "G-HRDQS22912"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Pesan diterima di background: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});

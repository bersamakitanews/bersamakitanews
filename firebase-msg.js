// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBfNbi1IZ2OE4QWtbwFePiI-_hU07F3Bno",
    authDomain: "bersamakitanews-26c17.firebaseapp.com",
    databaseURL: "https://bersamakitanews-26c17-default-rtdb.firebaseio.com",
    projectId: "bersamakitanews-26c17",
    storageBucket: "bersamakitanews-26c17.firebasestorage.app",
    messagingSenderId: "522341014391",
    appId: "1:522341014391:web:0d5de1b280c7d8ca3c9f72",
    measurementId: "G-13ZRY9GX01"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

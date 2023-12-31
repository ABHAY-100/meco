// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgpNubXCkttjTxV_4PUn8MukqMF-F7fEQ",
  authDomain: "meco-7d3ff.firebaseapp.com",
  projectId: "meco-7d3ff",
  storageBucket: "meco-7d3ff.appspot.com",
  messagingSenderId: "382657222419",
  appId: "1:382657222419:web:9f6c1c36d165efe8c26ce6",
  measurementId: "G-2DS52GNS8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
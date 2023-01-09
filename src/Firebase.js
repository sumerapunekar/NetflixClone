// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKfAiJH3tPoqlXuHFV8-Z1piTnCFwBX7E",
  authDomain: "netflix-clone-45a5f.firebaseapp.com",
  projectId: "netflix-clone-45a5f",
  storageBucket: "netflix-clone-45a5f.appspot.com",
  messagingSenderId: "307155744504",
  appId: "1:307155744504:web:e3a693a1320ac3252a6d0d",
  measurementId: "G-WR038HBHHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
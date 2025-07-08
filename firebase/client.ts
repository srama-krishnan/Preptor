// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARBWs9ssO_rWiT0GSyChjMpVLB5Vi0GU0",
  authDomain: "preptor-daa3d.firebaseapp.com",
  projectId: "preptor-daa3d",
  storageBucket: "preptor-daa3d.firebasestorage.app",
  messagingSenderId: "185840527446",
  appId: "1:185840527446:web:a246271fd75c8231fd73f7",
  measurementId: "G-NSH48YPV0G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
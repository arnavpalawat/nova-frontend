// firebaseClient.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDFh2G-_aYd6TrfRV1zco47n3dFAiLAgag",
    authDomain: "nova-e3db3.firebaseapp.com",
    projectId: "nova-e3db3",
    storageBucket: "nova-e3db3.appspot.com",
    messagingSenderId: "995070730326",
    appId: "1:995070730326:web:4452eeecbf6a42457f9bf7",
    measurementId: "G-ZDNJ0NQ7KL",
};

// Initialize app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize services
const auth = getAuth(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { auth, analytics };

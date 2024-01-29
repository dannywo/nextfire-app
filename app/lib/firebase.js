import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE,
    messagingSenderId: "502550240467",
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
if (!firebase.app.length) {
    const app = initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDP5jHO2NRhKn89J7BLAic9YLMAvUx3RA0",
    authDomain: "markdown-post.firebaseapp.com",
    projectId: "markdown-post",
    storageBucket: "markdown-post.appspot.com",
    messagingSenderId: "401463025141",
    appId: "1:401463025141:web:0719d4b9b340cfac5fd4bc"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const GoogleProvider = new GoogleAuthProvider();


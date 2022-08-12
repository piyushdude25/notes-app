
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAx6scqE3FnTz0f7VQ1qiPiGTz0hing0zA",
  authDomain: "notesapp-18900.firebaseapp.com",
  projectId: "notesapp-18900",
  storageBucket: "notesapp-18900.appspot.com",
  messagingSenderId: "644335551681",
  appId: "1:644335551681:web:f3c179fafe31a3216c8040",
  measurementId: "G-SPX5SVEXKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)


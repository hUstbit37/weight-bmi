import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA6AO8j9rWviAiC5dbSAXptYhLaddnnrG0",
    authDomain: "weight-bmi.firebaseapp.com",
    projectId: "weight-bmi",
    storageBucket: "weight-bmi.firebasestorage.app",
    messagingSenderId: "965003693068",
    appId: "1:965003693068:web:f4525cfba1f1d12e85b229",
    measurementId: "G-XCXS7033EH"
  };

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)

export { auth, db }
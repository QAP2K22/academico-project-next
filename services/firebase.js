// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
try {
  app = getApp()
} catch (error) {
  
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_LOGIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BC,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_APP_ID
  };

  // Initialize Firebase
  app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db }
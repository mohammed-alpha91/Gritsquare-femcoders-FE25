// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwLWauK-XuyYIvrfEMNBqLriYL73Ty3bM",
    authDomain: "femcoders-5bbe4.firebaseapp.com",
    databaseURL: "https://femcoders-5bbe4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "femcoders-5bbe4",
    storageBucket: "femcoders-5bbe4.firebasestorage.app",
    messagingSenderId: "260221466839",
    appId: "1:260221466839:web:e36f1af6458fead0c05892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const msgRef = ref(db, '/messages');

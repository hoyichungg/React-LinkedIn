import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmopO4ELudICXqZrv1NneXFqcv9LQ7rmw",
    authDomain: "linkedin-f553a.firebaseapp.com",
    projectId: "linkedin-f553a",
    storageBucket: "linkedin-f553a.appspot.com",
    messagingSenderId: "865256669324",
    appId: "1:865256669324:web:260aa3189a8fc4c8d9bba9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };

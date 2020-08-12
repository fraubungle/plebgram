import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase WebApp Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNjMXAudQdsV8-d47zjAQ2DwPp_wojSc4",
    authDomain: "plebgram.firebaseapp.com",
    databaseURL: "https://plebgram.firebaseio.com",
    projectId: "plebgram",
    storageBucket: "plebgram.appspot.com",
    messagingSenderId: "921799378658",
    appId: "1:921799378658:web:93acba35f52fb653c240bb",
    measurementId: "G-Y8674DN6N4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
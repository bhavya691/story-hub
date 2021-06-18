import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAQWC54rhvaNaiwXmIEEUy2UJx_LL9Jvyc",
    authDomain: "story-hub-41565.firebaseapp.com",
    projectId: "story-hub-41565",
    storageBucket: "story-hub-41565.appspot.com",
    messagingSenderId: "804944283702",
    appId: "1:804944283702:web:73de1042056bd710b07097"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
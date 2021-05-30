import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyA0mNJWLqaOAt6_TlMDYDN8XMc5kP2e6pM",
    authDomain: "mobaproject-9604a.firebaseapp.com",
    projectId: "mobaproject-9604a",
    storageBucket: "mobaproject-9604a.appspot.com",
    messagingSenderId: "948751821795",
    appId: "1:948751821795:web:af3597b794a91880824ed6",
    databaseURL: "https://mobaproject-9604a-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

let app = firebase.initializeApp(config);
export const db = app.database();

import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyDKdkV3ED21t419BDBEk195Cx1O38MvM_E",
    authDomain: "st-try-ebb03.firebaseapp.com",
    databaseURL: "https://st-try-ebb03-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "st-try-ebb03",
    storageBucket: "st-try-ebb03.appspot.com",
    messagingSenderId: "144375463855",
    appId: "1:144375463855:web:0af3370669466845acb95a",
    measurementId: "G-MH09FCB740"
  };
let app = firebase.initializeApp(config);
export const db = app.database();
import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyBhyXjJr9ci1-OrlqK65urdfAUX2hvewOQ",
    authDomain: "idonatedb.firebaseapp.com",
    databaseURL: "https://idonatedb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "idonatedb",
    storageBucket: "idonatedb.appspot.com",
    messagingSenderId: "619639065347",
    appId: "1:619639065347:web:3dc79d65f83d19870ab736"
  };

let app = firebase.initializeApp(config);
export const db = app.database();

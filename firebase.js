import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBBV3eFtAZi9Wwc4W1Wv5lzytWTvNZOsMA",
    authDomain: "facebook-yt-4f3b2.firebaseapp.com",
    projectId: "facebook-yt-4f3b2",
    storageBucket: "facebook-yt-4f3b2.appspot.com",
    messagingSenderId: "2028043573",
    appId: "1:2028043573:web:3c28075c2c40ec7ba5207c"
  };

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

  const db = app.firestore()
  const storage = firebase.storage()

  export { db, storage}
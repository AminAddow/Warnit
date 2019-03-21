import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA3_gDxiGwr258RUzjjuy5UVq7PSkFijGM",
  authDomain: "warnit-86a49.firebaseapp.com",
  databaseURL: "https://warnit-86a49.firebaseio.com",
  projectId: "warnit-86a49",
  storageBucket: "warnit-86a49.appspot.com",
  messagingSenderId: "105959363714"
};
firebase.initializeApp(config);

export default firebase;

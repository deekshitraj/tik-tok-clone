import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARA3a2BU45uzdCOfe7r_b81ljlS7i_aJU",
    authDomain: "encoded-rider-280907.firebaseapp.com",
    databaseURL: "https://encoded-rider-280907.firebaseio.com",
    projectId: "encoded-rider-280907",
    storageBucket: "encoded-rider-280907.appspot.com",
    messagingSenderId: "801774813126",
    appId: "1:801774813126:web:5bb06b73a5e16afff9bcc7",
    measurementId: "G-X532T3HPT8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;


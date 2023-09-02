import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv9yNBmyuiMDqd5PJ7-l3C0KGhCh9KeQs",
    authDomain: "olx-clone-c6a9e.firebaseapp.com",
    projectId: "olx-clone-c6a9e",
    storageBucket: "olx-clone-c6a9e.appspot.com",
    messagingSenderId: "904911800580",
    appId: "1:904911800580:web:2f7ea1bd957b471ec2a851",
    measurementId: "G-5W24F76ZMW"
  };

  export default firebase.initializeApp(firebaseConfig)

import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5QD5MGealeh7WyjQsyV0BzU0qU-D6NaE",
    authDomain: "fir-3ce94.firebaseapp.com",
    projectId: "fir-3ce94",
    storageBucket: "fir-3ce94.appspot.com",
    messagingSenderId: "917239199661",
    appId: "1:917239199661:web:80cef6e2c7aee791bad324",
    measurementId: "G-1F5M7YQ1XS"
  };

 export default firebase.initializeApp(firebaseConfig)
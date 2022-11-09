import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDUh81VAgFbJNlz8eYYvC9BFjpsfp9sMLQ",
    authDomain: "todo-react-firebase-18fd8.firebaseapp.com",
    projectId: "todo-react-firebase-18fd8",
    storageBucket: "todo-react-firebase-18fd8.appspot.com",
    messagingSenderId: "1004424382188",
    appId: "1:1004424382188:web:00d3bc9e3515a0c1e547c9"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)

  export { db }
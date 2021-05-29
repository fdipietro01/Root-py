import firebase from "firebase/app"
import "firebase/firestore"


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APP_ID,
    authDomain: "roots-stor.firebaseapp.com",
    projectId: "roots-stor",
    storageBucket: "roots-stor.appspot.com",
    messagingSenderId: "934686200174",
    appId: "1:934686200174:web:7d88202e991b95bbca717f"
  })

  export const getFirebase = ()=> app
  export const getFirestore =()=> firebase.firestore(app);
  export const getDate = () => firebase.firestore.Timestamp.fromDate(new Date())
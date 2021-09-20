import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey:  process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "portfolio-tomas-vergara",
    storageBucket: "portfolio-tomas-vergara.appspot.com",
    messagingSenderId: "640056025038",
    appId:  process.env.REACT_APP_APP_ID,
    measurementId: "G-CDE032SJLV"
  };
  //Initialize Firebase
  const app= firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }
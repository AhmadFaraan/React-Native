import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaYNbEVBPfu1hkx-syerawlQ8n1AbgLGM",
  authDomain: "reactnativeproject-f80ad.firebaseapp.com",
  projectId: "reactnativeproject-f80ad",
  storageBucket: "reactnativeproject-f80ad.appspot.com",
  messagingSenderId: "579606481839",
  appId: "1:579606481839:web:b03c750de81e4cfd96bd5a",
  measurementId: "G-MQ59EMGCBQ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };

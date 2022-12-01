import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfNwYRINWK-pIXbTLeBMhX46NNFsQWi3E",
  authDomain: "emicatronic-e4dd5.firebaseapp.com",
  projectId: "emicatronic-e4dd5",
  storageBucket: "emicatronic-e4dd5.appspot.com",
  messagingSenderId: "1021549632635",
  appId: "1:1021549632635:web:097cdf76b05eae88f356de",
  measurementId: "G-16EMVDMJRX"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {app,db,storage}
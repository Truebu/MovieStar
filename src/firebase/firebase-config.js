import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi9UctEj3oj8jqvxtCkLRWjG5OmpXFyqE",
  authDomain: "moviestar-be-64931.firebaseapp.com",
  projectId: "moviestar-be-64931",
  storageBucket: "moviestar-be-64931.appspot.com",
  messagingSenderId: "717671660848",
  appId: "1:717671660848:web:5108244a848b15594adcf5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}

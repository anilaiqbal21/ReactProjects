import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHi31gyofFC0eV6g5UnKGCYAsCxsFBsVA",
  authDomain: "image-gallery-9ac05.firebaseapp.com",
  projectId: "image-gallery-9ac05",
  storageBucket: "image-gallery-9ac05.appspot.com",
  messagingSenderId: "658587352006",
  appId: "1:658587352006:web:7e9e45cd58331d876590c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectfirestore, timeStamp };

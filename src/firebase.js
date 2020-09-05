import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFZV9XHBZRDZjlFbjkFgjUx9hshyWB8C0",
    authDomain: "chordd-c7568.firebaseapp.com",
    databaseURL: "https://chordd-c7568.firebaseio.com",
    projectId: "chordd-c7568",
    storageBucket: "chordd-c7568.appspot.com",
    messagingSenderId: "784910249885",
    appId: "1:784910249885:web:af429b49f1a5283c610974",
    measurementId: "G-P3N7KR7Z3P"
});

const db = firebaseApp.firestore();

export default db;

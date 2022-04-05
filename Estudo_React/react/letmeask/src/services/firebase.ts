import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDvotuDFoHIo2tnZgZutKGtn72JJsmOOPM",
    authDomain: "letmeask-23d71.firebaseapp.com",
    databaseURL: "https://letmeask-23d71-default-rtdb.firebaseio.com",
    projectId: "letmeask-23d71",
    storageBucket: "letmeask-23d71.appspot.com",
    messagingSenderId: "609271585576",
    appId: "1:609271585576:web:3514cfac8dc2968c78ce1d"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
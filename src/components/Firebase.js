// @flow
import * as firebase from 'firebase'
require('firebase/firestore')

console.log('firebase running', firebase)

const config = {
    apiKey: "AIzaSyAHDqABFch8hPHUtoMsxw_lTjIz2S1EoA0",
    authDomain: "racepal-firebasedb.firebaseapp.com",
    databaseURL: "https://racepal-firebasedb.firebaseio.com",
    projectId: "racepal-firebasedb",
    storageBucket: "racepal-firebasedb.appspot.com",
    messagingSenderId: "82743144374"
  };




export const firebaseRef = firebase.initializeApp(config)
export const firestore = firebase.firestore()

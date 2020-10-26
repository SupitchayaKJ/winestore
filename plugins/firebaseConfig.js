import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAM9AbTfjDovFGdC5pLEd-gWfzvw8EK4Z0',
    authDomain: 'winestored.firebaseapp.com',
    databaseURL: 'https://winestored.firebaseio.com',
    projectId: 'winestored',
    storageBucket: 'winestored.appspot.com',
    messagingSenderId: '1003189276982',
    appId: '1:1003189276982:web:dcbb43a6a5e4c76143e397',
    measurementId: 'G-83B0VBVNSV'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

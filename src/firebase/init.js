import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBZDeNyMubLjOmVMiZNbCXNeQug0BcRFgk',
  authDomain: 'ninja-chat-42d79.firebaseapp.com',
  databaseURL: 'https://ninja-chat-42d79.firebaseio.com',
  projectId: 'ninja-chat-42d79',
  storageBucket: 'ninja-chat-42d79.appspot.com',
  messagingSenderId: '816921397027'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()

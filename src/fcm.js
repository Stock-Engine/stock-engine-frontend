import firebase from 'firebase'
import { API } from './Api'

export class FCM {
  static init () {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
      authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIRESTORE_APP_ID
    }

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

  static async register (cookies) {
    const messaging = firebase.messaging()

    return messaging.getToken({ vapidKey: process.env.REACT_APP_FIRESTORE_TOKEN })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Registered!')
          return API.registerFCM(cookies, currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.')
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
  }
}

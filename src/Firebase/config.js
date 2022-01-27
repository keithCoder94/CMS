import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDebniW5Uw2xg7QRQedpXg5X_5oiphhkOg",
    authDomain: "cyberpharm-cms.firebaseapp.com",
    projectId: "cyberpharm-cms",
    storageBucket: "cyberpharm-cms.appspot.com",
    messagingSenderId: "751514986157",
    appId: "1:751514986157:web:95c7be9040d7c7fd33c824",
    measurementId: "G-FH768FJS5J"
  };

  const app = firebase.initializeApp(firebaseConfig);

export { firebase };
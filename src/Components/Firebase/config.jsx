import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDX2R41jLb_poZSb3gAaVBmPgp6t_mn3Gg",
  authDomain: "hexstock-ac5e4.firebaseapp.com",
  projectId: "hexstock-ac5e4",
  storageBucket: "hexstock-ac5e4.appspot.com",
  messagingSenderId: "602147665777",
  appId: "1:602147665777:web:713b959f71ee441a73e8d0",
  measurementId: "G-D40BVW9QTN"
};

export default firebase.initializeApp(firebaseConfig);
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5NeTMh3oebBP9cReNm7flLt-xWt7t9LE",
    authDomain: "crwn-clothing-db-aaa6b.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-aaa6b.firebaseio.com",
    projectId: "crwn-clothing-db-aaa6b",
    storageBucket: "",
    messagingSenderId: "379506059916",
    appId: "1:379506059916:web:61f718b7875bec7f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

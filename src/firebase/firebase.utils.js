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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAT = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAT,
				...additionalData
			})
		} catch (error){
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return{
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title, 
			items
		}
	});
	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {})
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unSubscribe = auth.onAuthStateChanged(userAuth => {
			unSubscribe();
			resolve(userAuth);
		}, reject)
	})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

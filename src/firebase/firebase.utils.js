import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyBUlaGJyD-516DfK2zQYEHH-mYYOko6ITM",
    authDomain: "crwn-db-bf22f.firebaseapp.com",
    databaseURL: "https://crwn-db-bf22f.firebaseio.com",
    projectId: "crwn-db-bf22f",
    storageBucket: "crwn-db-bf22f.appspot.com",
    messagingSenderId: "156425929034",
    appId: "1:156425929034:web:8a8a39ce5b16d51d8b81b3",
    measurementId: "G-NG240754PP"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
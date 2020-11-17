import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxLxVJLBdaiUo3AZCPxRwV9ZMTnL3cGm0",
    authDomain: "clone-react-c3b57.firebaseapp.com",
    databaseURL: "https://clone-react-c3b57.firebaseio.com",
    projectId: "clone-react-c3b57",
    storageBucket: "clone-react-c3b57.appspot.com",
    messagingSenderId: "622669763259",
    appId: "1:622669763259:web:306c1e321fcb37f6d4cf9e",
    measurementId: "G-LHMP9WG2GN"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth()



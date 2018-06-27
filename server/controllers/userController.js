import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyC_aoJFyrQ8rRDnwMZsraxQtC3Vqz153ys',
	authDomain: "dojosearch-1499373807954.firebaseapp.com",
    databaseURL: "https://dojosearch-1499373807954.firebaseio.com",
    projectId: "dojosearch-1499373807954",
    storageBucket: "dojosearch-1499373807954.appspot.com",
    messagingSenderId: "529864368815"
});

export const registerUserWithEmail = async (req, res) => {
	console.log(app.auth())
}
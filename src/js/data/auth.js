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

app.auth().onAuthStateChanged((user) => {
    // console.log(user);
});

export const registerUser = async ({ email, password }) => {
    const newUser = app.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
            console.log(data);
            return data
        })
        .catch(err => err);
}

export default {
    loggedIn: false
}
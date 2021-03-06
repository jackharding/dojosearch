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

export const registerUser = async (req, res, next) => {
    let { email, password } = req.body;
    const newUser = app.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            const error = new Error(err.message);
            error.status = 400;
            next(error);
        });
}
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyDi4CjrAZOE54D1c7HPI9-5UYnMr5qSowU",
	authDomain: "cesar-marketplace.firebaseapp.com",
	projectId: "cesar-marketplace",
	storageBucket: "cesar-marketplace.appspot.com",
	messagingSenderId: "876398760905",
	appId: "1:876398760905:web:124fe3282d5483b3d2ce18",
	measurementId: "G-GM95EP11EN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

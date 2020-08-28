import * as firebase from "firebase";

//Configuration based off of necessary Firebase information
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

//Initialize firebase here to prevent repetitive instantiation
firebase.initializeApp(config);

//Declare and export firebase functions and variables that are needed within the app
export const database = firebase.firestore();
export const auth = firebase.auth();

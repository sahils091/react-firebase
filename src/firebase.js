import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD0JS8pZ0Qckt4zcn2kaBGv3BwXwBBwhdU",
    authDomain: "auth-development-e9615.firebaseapp.com",
    projectId: "auth-development-e9615",
    storageBucket: "auth-development-e9615.appspot.com",
    messagingSenderId: "206315294499",
    appId: "1:206315294499:web:e24c662a22782630094696"

}


const application = firebase.initializeApp(firebaseConfig)

export const auth = application.auth();

export default application
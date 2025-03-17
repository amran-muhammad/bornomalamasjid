import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDE8UJl33zXNRnGmCCcgY1UiHQ73m-UMhQ",
    authDomain: "bagbarijamemasjid-bdde1.firebaseapp.com",
    projectId: "bagbarijamemasjid-bdde1",
    storageBucket: "bagbarijamemasjid-bdde1.firebasestorage.app",
    messagingSenderId: "996370772023",
    appId: "1:996370772023:web:fe1a760df63c8a01680fb2",
    measurementId: "G-ERKX175TE1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Login
const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
        console.log("User signed in:", result.user);
    }).catch((error) => {
        console.error("Error:", error);
    });
};

document.getElementById("google-login").addEventListener("click", googleLogin);

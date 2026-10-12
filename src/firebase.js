import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdR_t28prIGMqaLz9EUX3W22qKz4YccK4",
    authDomain: "dev-deakin-p4-1833e.firebaseapp.com",
    projectId: "dev-deakin-p4-1833e",
    storageBucket: "dev-deakin-p4-1833e.firebasestorage.app",
    messagingSenderId: "653326380080",
    appId: "1:653326380080:web:4a348e8fe137ed783511f5",
    measurementId: "G-E3QPXQ5D5K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
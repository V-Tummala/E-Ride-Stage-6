import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3ER7GQ3KBzrUQUKiAZupwSwmHPrUYcL8",
    authDomain: "e-ride-e01d0.firebaseapp.com",
    projectId: "e-ride-e01d0",
    storageBucket: "e-ride-e01d0.appspot.com",
    messagingSenderId: "374212458605",
    appId: "1:374212458605:web:d267fd7d2cec574cfca764"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firestore;
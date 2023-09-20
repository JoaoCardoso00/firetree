// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBSRa_06A3AijI2i9dV9y5nBESf7TLHw-o',
	authDomain: 'firetree-36334.firebaseapp.com',
	projectId: 'firetree-36334',
	storageBucket: 'firetree-36334.appspot.com',
	messagingSenderId: '600669629277',
	appId: '1:600669629277:web:c8f6671d036cc7d3be96b4'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

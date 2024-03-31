// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDfnAtcf9neTehpNvNihO3QqRVo2SRdNc",
  authDomain: "coderh-eb15b.firebaseapp.com",
  projectId: "coderh-eb15b",
  storageBucket: "coderh-eb15b.appspot.com",
  messagingSenderId: "284463901375",
  appId: "1:284463901375:web:30de1a3a92006e9ea5f40a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


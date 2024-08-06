// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8cpsNMFOKDI41naBJw1cz_-dve_9sXzA",
  authDomain: "food-app-5176c.firebaseapp.com",
  projectId: "food-app-5176c",
  storageBucket: "food-app-5176c.appspot.com",
  messagingSenderId: "654214880072",
  appId: "1:654214880072:web:6018e57770743d3530717d",
  measurementId: "G-HPYC23DD3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

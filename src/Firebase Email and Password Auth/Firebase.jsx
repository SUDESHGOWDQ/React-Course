
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtqtvm9YR1xCpiTXGg1gwHqvhBMJg8YpQ",
  authDomain: "reactemail-d1fc9.firebaseapp.com",
  projectId: "reactemail-d1fc9",
  storageBucket: "reactemail-d1fc9.appspot.com",
  messagingSenderId: "1052746902293",
  appId: "1:1052746902293:web:3b477a7a9f0228d460d71c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
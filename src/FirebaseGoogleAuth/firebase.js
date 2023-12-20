import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWHKcbPNiQs0J0o-vMCsqM7FThwYmxCo4",
  authDomain: "auth-569e4.firebaseapp.com",
  projectId: "auth-569e4",
  storageBucket: "auth-569e4.appspot.com",
  messagingSenderId: "290640471947",
  appId: "1:290640471947:web:315b070eb60689ab7bb18e",
  measurementId: "G-SJBZ83ZH83"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  default {auth,app}
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBrfVrlD6Dd0G9iOxOufhi0Kzzup_EuluQ",
  authDomain: "fir-crud-4e02e.firebaseapp.com",
  projectId: "fir-crud-4e02e",
  storageBucket: "fir-crud-4e02e.appspot.com",
  messagingSenderId: "641957391041",
  appId: "1:641957391041:web:44f081817b9fbb017a8240"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
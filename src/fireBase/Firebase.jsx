import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDahF6U1oatgq27CC8B38fPrrwrHQFptBE",
  authDomain: "tiecult-585e6.firebaseapp.com",
  projectId: "tiecult-585e6",
  storageBucket: "tiecult-585e6.appspot.com",
  messagingSenderId: "410431960313",
  appId: "1:410431960313:web:ede2657ae715ffe142de28",
  measurementId: "G-LWYGCT14F6"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;



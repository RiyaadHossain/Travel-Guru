import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQXlpBc6JWTf8n4oBV9uftWScI2FzYHwM",
  authDomain: "common-project-000.firebaseapp.com",
  projectId: "common-project-000",
  storageBucket: "common-project-000.appspot.com",
  messagingSenderId: "789278346215",
  appId: "1:789278346215:web:2d8dca718495177bdd8b42"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
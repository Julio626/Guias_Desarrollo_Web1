// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://ww.gstatic.com/firebasejs/11.0.1/firebase-auth.js ";
import { getFirestore, setDoc, Doc } from "https://ww.gstatic.com/firebasejs/11.0.1/firebase-firestore.js ";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh1QScn6J71JYl_XkpUdDxG6RvztMbvA0",
  authDomain: "desarrollo-web-agenda-fb4ff.firebaseapp.com",
  projectId: "desarrollo-web-agenda-fb4ff",
  storageBucket: "desarrollo-web-agenda-fb4ff.firebasestorage.app",
  messagingSenderId: "1015420715214",
  appId: "1:1015420715214:web:ae23f76013626cd78d509f",
  measurementId: "G-YXN7BMMM29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
  
export async function registerUser(email, password, firstName, lastName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(Doc(db, "users", user.uid),{
            firstName,
            lastName,
            role: "user"
        })
        console.log('Usuario registrado existosamente: ', userCredential.user)
    }
    catch(error) {
    console.log('Error: ', error.message)
    }
}

export async function loginUser(auth, email, password){
    try{
        const userCredencial= await signInWithEmailAndPassword(auth, email,password)
        console.log("Inicio de sesión exitoso")
    }
    catch(error){
        HTMLFormControlsCollection.log("Usuario y/o Contraseña erronea", error.message)
    }
}
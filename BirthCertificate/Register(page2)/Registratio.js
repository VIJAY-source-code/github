// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, set,ref } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpms2tTkAxoWXrtUxwv8OK8mez55lE_2Q",
  authDomain: "birth-f9d17.firebaseapp.com",
  projectId: "birth-f9d17",
  storageBucket: "birth-f9d17.firebasestorage.app",
  messagingSenderId: "512123922859",
  appId: "1:512123922859:web:598fb30e2eae085d108aee",
  measurementId: "G-TW9HPTQETZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();

  //Enter Inputs
  // let name = document.getElementById("name");
  let uname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      //for show data in RealtimeDatabase
      set(ref(database, "details/" + user.uid), {
        uname: uname,
        email: email,
        password: password,
      });

      swal("Created successfully!", " ", "success");
      window.location.href="Birthform.html"

      //ClearInputs
      uname.value="",
      email.value="",
      password.value="";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Error!", errorMessage, "error");

      // ..
    });
});

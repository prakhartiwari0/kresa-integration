import './style.css'

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const kresaApp = function (){
  
  // TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwoTrmEmA_OZGin5iSf01CT4dYyg_JGk",
  authDomain: "kresa-2507.firebaseapp.com",
  projectId: "kresa-2507",
  storageBucket: "kresa-2507.appspot.com",
  messagingSenderId: "497735635673",
  appId: "1:497735635673:web:bc9abf3688d5904b85e4c8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();


  const auth = getAuth();

function signInWithGoogle(){

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
    
    
    
    const rateWithKresaButton = document.getElementsByClassName('rateWithKresaButton')
let rateWithKresaButtons_Array = Array.from(rateWithKresaButton)
let dialog;

rateWithKresaButtons_Array.forEach(function (element) {
  element.addEventListener('click', openKresaPopup)

});


function createKresaPopup() {
  dialog = document.createElement('dialog');
  dialog.classList.add('kresaPopup');


  dialog.innerHTML = `
  <h2>Modal Title</h2>
  <p>Modal Content</p>
  <button id="kresaSignInWithGoogleButton">Google</button>
  <button id="closeKresaPopup">Close</button>
  `;

  const closeButton = dialog.querySelector('#closeKresaPopup');
  closeButton.addEventListener('click', closeKresaPopup);
  const kresaSignInWithGoogleButton = dialog.querySelector('#kresaSignInWithGoogleButton');
  kresaSignInWithGoogleButton.addEventListener('click', signInWithGoogle);
}




function closeKresaPopup() {
  dialog.close()
}

function openKresaPopup() {

  // If the dialog element is not created yet, create it with createKresaPopup Function
  if (dialog === undefined) createKresaPopup()


  document.body.appendChild(dialog);
  dialog.showModal()



}}()
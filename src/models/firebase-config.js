// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEuvNnbqVG5mqHTU2rx2furGfty3u387M",
  authDomain: "storage-everymind.firebaseapp.com",
  projectId: "storage-everymind",
  storageBucket: "storage-everymind.appspot.com",
  messagingSenderId: "990021873369",
  appId: "1:990021873369:web:bcc80bffb5e46b464a18c8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
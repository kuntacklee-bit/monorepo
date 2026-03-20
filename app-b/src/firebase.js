
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfxXKYs-MuQ7a4DW4dNJNsFB80L_MnLr0",
  authDomain: "monorepo-app-b.firebaseapp.com",
  projectId: "monorepo-app-b",
  storageBucket: "monorepo-app-b.appspot.com",
  messagingSenderId: "924890336719",
  appId: "1:924890336719:web:1e009161d3f8bcd78e56ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

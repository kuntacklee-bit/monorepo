
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDdAsgXT7Hgw7zFreIniJ5zEMzWxVj1KM",
  authDomain: "monorepo-bb853.firebaseapp.com",
  projectId: "monorepo-bb853",
  storageBucket: "monorepo-bb853.appspot.com",
  messagingSenderId: "285146693427",
  appId: "1:285146693427:web:b8dc1ade092cafa9034846"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

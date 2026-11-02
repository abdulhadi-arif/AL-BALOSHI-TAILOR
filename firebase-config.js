import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFnvDP3HNlXM7TCp9HwZm-_pnwP1USD_8",
  authDomain: "albaloshi-tailor.firebaseapp.com",
  projectId: "albaloshi-tailor",
  storageBucket: "albaloshi-tailor.firebasestorage.app",
  messagingSenderId: "109342066289",
  appId: "1:109342066289:web:c615e9c949dd1756ea3dd0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("✅ Firebase Connected - Separate File");

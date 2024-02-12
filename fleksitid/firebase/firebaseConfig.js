import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXAV7xZr-ztj97FSL3oOhaUqsIiqfR2fk",
//   authDomain: "visma-5c70e.firebaseapp.com",
//   projectId: "visma-5c70e",
//   storageBucket: "visma-5c70e.appspot.com",
//   messagingSenderId: "161477454641",
//   appId: "1:161477454641:web:7abeb57872fb86ef719e10",
// };
//
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export const dbCollectionBrukere = "Brukere";

import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db, dbCollectionBrukere } from "@/firebase/firebaseConfig";

export const fetchData = async (ansattNr) => {
  const docRef = doc(db, dbCollectionBrukere, `${ansattNr}`);
  const docSnap = await getDoc(docRef);
  console.log(docRef, docSnap, "docRef, docSnap");
  if (docSnap.exists()) {
    const bruker = docSnap.data();
    const stemplingCollection = collection(docRef, "Stempling");
    const stemplingSnapshot = await getDocs(stemplingCollection);
    const stemplingData = stemplingSnapshot.docs.map((doc) => doc.data());
    return { bruker, stemplingData };
    //   } else {
    //     throw new Error("No such document!");
    //   }
  }
};

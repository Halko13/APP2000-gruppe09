import { db, dbCollectionBrukere } from "@/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function generateStaticParams() {
  const ansattListe = [];
  const querySnapshot = await getDocs(collection(db, dbCollectionBrukere));
  querySnapshot.forEach((doc) => {
    // console.log(doc.data());
    ansattListe.push({ AnsattNr: doc.data().AnsattNr });
  });
  console.log("ansattNr2", ansattListe);
  return ansattListe;
}

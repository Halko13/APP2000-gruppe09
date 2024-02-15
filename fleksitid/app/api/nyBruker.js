import { dbCollectionBrukere } from "@/firebase/firebaseConfig";
import db from "@/firebase/firebaseAdmin";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import bcryptHashing from "@/components/Hash/Hashing";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const formData = req.body;

      const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        res.status(400).json({ error: "AnsattNr finnes allerede" });
      } else {
        try {
          const hashedPassword = await bcryptHashing(formData.Passord);
          await setDoc(doc(db, dbCollectionBrukere, formData.AnsattNr), {
            AnsattNr: formData.AnsattNr,
            Fornavn: formData.Fornavn,
            Etternavn: formData.Etternavn,
            Epost: formData.Epost,
            Stilling: formData.Stilling,
            Avdeling: formData.Avdeling,
            AntallJobbTimer: formData.AntallJobbTimer,
            Passord: hashedPassword,
            Opprettet: serverTimestamp(),
            SistEndret: serverTimestamp(),
            TimeBank: Number(formData.AntallJobbTimer),
          });
          res.status(200).json({ message: "User created successfully" });
        } catch (error) {
          res
            .status(500)
            .json({ error: "Error hashing password or saving user" });
        }
      }
    } else {
      // Handle any other HTTP method
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unexpected server error" });
  }
}

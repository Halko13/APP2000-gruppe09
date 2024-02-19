import db from "@/firebase/firebaseAdmin";
import { dbCollectionBrukere } from "@/firebase/firebaseConfig";
import bcryptHashing from "@/components/Hash/Hashing";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("test");
    const { body } = req;

    try {
      const hashedPassword = await bcryptHashing(body.Passord);
      body.Passord = hashedPassword;

      const docRef = await db.collection(dbCollectionBrukere).add(body);
      res
        .status(200)
        .send(`Document successfully written with ID: ${docRef.id}`);
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).send("Error adding document");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// pages/api/brukere.js
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = getFirestore();
      const brukerReferanser = collection(db, "Brukere");
      const brukerData = await getDocs(brukerReferanser);
      const brukerListe = brukerData.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      res.status(200).json(brukerListe);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

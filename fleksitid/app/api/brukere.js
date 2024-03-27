// pages/api/brukere.js
import { db } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const brukerReferanser = db.collection("Brukere");
      const brukerData = await brukerReferanser.get();
      const brukerListe = brukerData.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      res.status(200).json({ brukere: brukerListe });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    // If you want to allow other methods like POST, PUT, etc., handle them here
    res.setHeader('Allow', ['GET']); // Specify which methods are allowed
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

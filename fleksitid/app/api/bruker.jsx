// pages/api/data.js
import db from "../../utils/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const snapshot = await db.collection("collectionName").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { body } = req;
    const docRef = await db.collection("collectionName").add(body);
    const newDoc = await docRef.get();
    res.status(200).json({ id: newDoc.id, ...newDoc.data() });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

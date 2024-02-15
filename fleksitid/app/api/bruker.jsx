export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    const docRef = doc(db, dbCollectionBrukere, formData.AnsattNr);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(400).json({ error: "AnsattNr already exists" });
    } else {
      // ... rest of the code
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: "Method not allowed" });
  }
}

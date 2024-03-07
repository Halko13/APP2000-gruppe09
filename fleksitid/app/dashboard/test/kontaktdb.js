import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@firebase/firebaseConfig';

const fetchDataFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, 'Brukere'));
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
};

const Database = () => {
  const [Brukere, setBrukere] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const BrukerData = await fetchDataFromFirestore();
      setBrukere(BrukerData);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {Brukere.map(Brukere => (
          <li key={Brukere.AnsattNr}>{Brukere.AnsattNr}</li>
        ))}
      </ul>
    </div>
  );
};

export default Database;

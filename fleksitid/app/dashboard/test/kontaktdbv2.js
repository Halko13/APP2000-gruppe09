import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

const Brukerinfo = () => {
  const [Brukerinfo, setBrukerinfo] = useState(null);

  useEffect(() => {
    const fetchBrukerinfo = async () => {
      try {
        const docRef = doc(db, 'Brukere', '1');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBrukerinfo(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchBrukerinfo();
  }, []);

  return (
    <div>
      <h3>City Information:</h3>
      {Brukerinfo && (
        <div>
          <h3>Name: {Brukerinfo.Fornavn}</h3>
          <p>Population: {Brukerinfo.Etternavn}</p>
          {/* Include other city information here */}
        </div>
      )}
    </div>
  );
};

export default Brukerinfo;

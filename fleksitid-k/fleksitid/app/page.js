'use client'
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

async function addDataToFirestore(brukernavn, passord) {
  try {
    const docRef = await addDoc(collection(db, 'Brukere'), {
      brukernavn: brukernavn,
      passord: passord,
    });
    consol.log("Dokument skrevet med ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error legge til dokument ", error)
    return false;
  } 
}

export default function Home() {
  const [brukernavn, setBrukernavn] = useState(" ");
  const [passord, setPassord] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFirestore(brukernavn, passord);
    if (added) {
      setBrukernavn("");
      setPassord("");

      alert("Data lagt til i firestore!!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1
       className="text-5xl font-bold m-10"
     >
      BLABLABLABLABLABLABLA
     </h1>
     <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'>
     <div className='mb-4'>
     <label htmlFor='brukernavn' className='block text-gray-700 font-bold mb-2'>
      Brukernavn:
     </label>
     <input
       type='text'
       id='brukernavn'
       className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
       value={brukernavn}
       onChange={(e) => setBrukernavn(e.target.value)}
     />
         </div>
         <div className='mb-4'>
     <label htmlFor='passord' className='block text-gray-700 font-bold mb-2'>
      Passord:
     </label>
     <input
       type='password'
       id='passord'
       className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
       value={passord}
       onChange={(e) => setPassord(e.target.value)}
     />
         </div>
         <div className='text-center'>
          <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'
          >
            Submit
          </button>
         </div>
      </form>
    </main> 
  )
}

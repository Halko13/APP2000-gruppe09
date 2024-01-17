import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Hjem() {
  const [gjeldendeTid, setGjeldendeTid] = useState('');

  useEffect(() => {
    const tidtaker = setInterval(() => {
      const nåTid = new Date();
      setGjeldendeTid(nåTid.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(tidtaker);
  }, []);

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center h-screen relative">
      <Head>
        <title>Startside</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          .material-skygge {
            box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
          }
        `}</style>
      </Head>
      <div className="absolute top-4 left-4 text-xl font-bold">{gjeldendeTid}</div>
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800 material-skygge">Velkommen</h1>
        // Legg til riktig link her
        <Link href="/innlogging" passHref>
          <button className="bg-pink-600 text-white px-6 py-3 inline-block rounded-lg font-bold material-skygge hover:bg-pink-700 overgangsfarger varighet-200">Logg inn</button>
        </Link>
      </div>
      <div className="absolute top-4 right-4">
        // Visma bildet her
        <img src="https://placehold.co/100x100" alt="Eksempelbilde" />
      </div>
    </div>
  );
}

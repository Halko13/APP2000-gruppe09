"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Klokke from '@/components/Klokke';
import SjekkinnKnapp from '@/components/SjekkinnKnapp';
import { Box, Typography } from '@mui/material';


export default function Page({ params }) {
  const [brukerInfo, setBrukerInfo] = useState(null);

  useEffect(() => {
    const hentBrukerInfo = async () => {
      const docRef = doc(db, "Brukere", params.ansattNr);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBrukerInfo(docSnap.data());
      } else {
        console.log("Ingen slik dokument!");
      }
    };

    hentBrukerInfo();
  }, [params.ansattNr]); 

  if (!brukerInfo) return <div>Laster...</div>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
    >
      <Klokke />
      <Typography variant="h3" gutterBottom>
      {brukerInfo.Fornavn} {brukerInfo.Etternavn}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom color="textSecondary">
      Ansattnummer: {params.ansattNr}
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom color="textSecondary">
      Stilling: {brukerInfo.Stilling}
      </Typography>
      <SjekkinnKnapp ansattNr ={params.ansattNr}/>
    </Box>
  );
}

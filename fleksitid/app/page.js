"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, ThemeProvider,TextField  } from "@mui/material";
import Link from 'next/link';
import Head from "next/head";
import { useRouter } from "next/navigation";
import VelgBrukerListe from "@/components/HenteBruker";
import { db } from "@/firebase/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import teama from "@/components/Temaer/Tema";
import BrukerListe from "@/components/BrukerKortListe";

export default function Hjem() {
  const [brukere, setBrukere] = useState([]);
  const [adminBrukere, setAdminBrukere] = useState([]);
  const [valgtBrukerId, setValgtBrukerId] = useState(null);
  const [valgtFulltNavn, setValgtFulltNavn] = useState("");
  const [gjeldendeTid, setGjeldendeTid] = useState("");
  const [søkeTekst, setSøkeTekst] = useState("");
  const [sideNummer, setSideNummer] = useState(1); // Side nummer for visning av brukere
  const [kortPerSide] = useState(6); // Vise 6 kort/brukere per side


  useEffect(() => {
  
      const hentBrukere = async () => {
      const brukerReferanser = collection(db, "Brukere");
      const brukerData = await getDocs(brukerReferanser);
      const brukerListe = brukerData.docs.map((dok) => ({
        id: dok.id, ...dok.data(),
      }));
      setBrukere(brukerListe);
      // Admin brukere fra firestore
      const adminBrukere = brukerListe.filter((bruker) => bruker.erAdmin);
      setAdminBrukere(adminBrukere);
    };
    hentBrukere();
    /*
    const hentBrukere = async () => {
      const respons = await fetch('/api/brukere');
      const data = await respons.json();
      if(respons.ok) {
      setBrukere(data.brukere);
      // Filter admin brukere
      const adminBrukere = data.brukere.filter(b => b.erAdmin);
      setAdminBrukere(adminBrukere);
    } else {
      console.error('Klarte ikke å hente brukere', data.error);
    }
   }
   hentBrukere();
   */
  // Effekten for å hente nåverende klokkeslett er henta fra chatGtp
    const tidtaker = setInterval(() => {
      const nåTid = new Date();
      setGjeldendeTid( nåTid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) );
    }, 1000);

    return () => clearInterval(tidtaker);
  }, []);

  
  const håndterValgtBruker = (id) => {
    const bruker = brukere.find((bruker) => bruker.id === id);
    if (bruker) {
      setValgtBrukerId(bruker.id);
      setValgtFulltNavn(`${bruker.Fornavn} ${bruker.Etternavn}`);
    }
  };
  
  // Sender bruker info til innlogging 
  const håndterInnlogin = () => {
    if (valgtBrukerId) {
      localStorage.setItem('brukerId', valgtBrukerId);
      window.location.href = '/innlogging';
    } else {
      alert('Vennligst velg en bruker før du fortsetter.');
    }
  };

  // Filter bruker basert på søke tekst
  const filtrerteBrukere = søkeTekst
  ? brukere.filter(bruker =>
    `${bruker.Fornavn} ${bruker.Etternavn}`.toLowerCase().includes(søkeTekst.toLowerCase())
    ) : brukere;
  
  const håndterSøkeTekstEndring = (e) => {
    setSøkeTekst(e.target.value);
    //Tilbakestill til første side ved nytt søk
    setSideNummer(1); 
  };

  // Gå til neste side
  const gåTilNesteSide = () => {
    setSideNummer(sideNummer + 1);
  };

  // Gå til forgje side 
  const gåTilForrigeSide = () => {
    setSideNummer(sideNummer - 1);
  };

  // Bergener indekser for å slice brukerlisten basert på sideNummer
  const indeksForSisteKort  = sideNummer * kortPerSide;
  const indeksForFørsteKort = indeksForSisteKort - kortPerSide;
  const visendeBrukere = filtrerteBrukere.slice(indeksForFørsteKort, indeksForSisteKort);



   
  return (
    <ThemeProvider theme={teama}>
    <Box
      sx={{
        bgcolor: "grey.50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
      }}
    >

      <Box sx={{ position: 'absolute', top: '10px', right: '10px'}}>
        <Link href="/adminInnlogging" passHref>
          <Button variant="contained" color="primary">
            Logg på som admin
          </Button>
        </Link>
      </Box>

      <Head>
        <title>Startside</title>
      </Head>

      <Typography
        variant="h2"
        sx={{ position: "relative", margin: "auto", fontWeight: "bold" }}>
        {gjeldendeTid}
      </Typography>

      <Box sx={{ textAlign: "center", margin: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "grey.1000",
            boxShadow: 1000,
          }}>
          Velkommen til Fleksitid
        </Typography>

        <TextField
        fullWidth
        margin="normal"
        label="Søk etter navnet ditt"
        value={søkeTekst}
        onChange={håndterSøkeTekstEndring}
        placeholder="Skriv her for å søke etter navnet"
        />

        <Button variant="contained" onClick={håndterInnlogin} fullWidth>
          Logg Inn
        </Button>

        <Typography variant="h4" sx={{ mt: 4 }}>
        Valgt bruker: {valgtFulltNavn}
        </Typography>

        {visendeBrukere.length > 0 && (
          <BrukerListe 
          brukere={visendeBrukere}
          valgtKort={valgtBrukerId}
          påValgt={håndterValgtBruker}
          />
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          {sideNummer > 1 && (
            <Button variant="contained" onClick={gåTilForrigeSide}>Forrige Side</Button>
          )}
          {indeksForSisteKort < filtrerteBrukere.length && (
            <Button variant="contained" onClick={gåTilNesteSide}>Neste Side</Button>
          )}
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );

}


"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import VelgBrukerListe from "@/components/HenteBruker";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import teama from "@/components/Temaer/Teama";

export default function Hjem() {
  const [brukere, setBrukere] = useState([]);
  const [adminBrukere, setAdminBrukere] = useState([]);
  const [valgtBrukerId, setValgtBrukerId] = useState("");
  const [gjeldendeTid, setGjeldendeTid] = useState("");

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


  // Effekten for å hente nåverende klokkeslett er henta fra chatGtp
    const tidtaker = setInterval(() => {
      const nåTid = new Date();
      setGjeldendeTid( nåTid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) );
    }, 1000);

    return () => clearInterval(tidtaker);
  }, []);

  const håndterBrukerEndring = (e) => {
    setValgtBrukerId(e.target.value);
  }

  const håndterInnlogin = () => {
    if (valgtBrukerId) {
      window.location.href = "innlogging";
    } else {
      alert('Vennligst velg en bruker før du fortsetter.');
    }
  }

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

        {brukere.length > 0 && (
        <VelgBrukerListe
        brukere={brukere}
        adminBrukere={adminBrukere}
        valgtBrukerId={valgtBrukerId}
        håndterBrukerEndring={håndterBrukerEndring}
        gåTilInnlogging={håndterInnlogin}
        />
        )}
      </Box>
    </Box>
    </ThemeProvider>
  );
}

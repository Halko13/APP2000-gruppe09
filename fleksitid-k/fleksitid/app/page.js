"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Hjem() {
  const [gjeldendeTid, setGjeldendeTid] = useState("");

  // Effekten for å hente nåverende klokkeslett er henta fra chatGtp
  useEffect(() => {
    const tidtaker = setInterval(() => {
      const nåTid = new Date();
      setGjeldendeTid(
        nåTid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);

    return () => clearInterval(tidtaker);
  }, []);

  return (
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
        sx={{ position: "absolute", top: 450, left: 1200, fontWeight: "bold" }}
      >
        {gjeldendeTid}
      </Typography>

      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "grey.1000",
            boxShadow: 1000,
          }}
        >
          Velkommen til Min Tid
        </Typography>

        <Link href="/innlogging" passHref>
          <Button variant="contained" color="secondary" sx={{ boxShadow: 5 }}>
            Logg inn
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

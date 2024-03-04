"use client";
import React, { useEffect, useState } from "react";
import {
  db,
  dbCollectionBrukere,
  dbCollectionBrukerStempling,
} from "@/firebase/firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import Klokke from "@/components/Klokke";
import SjekkinnKnapp from "@/components/SjekkinnKnapp";
import { Box, Typography } from "@mui/material";
import DagensInnsjekkTittel from "@/components/dashboard/dagensInnsjekk/InnsjekkTittel";
export default function Page({ params }) {
  const [brukerInfo, setBrukerInfo] = useState(null);
  const [stemplinger, setStemplinger] = useState([]); // New state variable

  useEffect(() => {
    const hentBrukerInfo = async () => {
      const today = new Date();
      const startOfDay = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
      );
      const endOfDay = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() + 1
      );

      const brukerStemplingRef = collection(
        db,
        dbCollectionBrukere,
        params.ansattNr,
        dbCollectionBrukerStempling
      );

      const q = query(
        brukerStemplingRef,
        where("stempleInn", ">=", Timestamp.fromMillis(startOfDay)),
        where("stempleInn", "<", Timestamp.fromMillis(endOfDay))
      );

      const querySnapshot = await getDocs(q);
      const newStemplinger = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const stempleInnDate = data.stempleInn
          ? data.stempleInn.toDate()
          : null;
        const stempleUtDate = data.stempleUt ? data.stempleUt.toDate() : null;
        newStemplinger.push({ stempleInnDate, stempleUtDate });
      });

      setStemplinger(newStemplinger); // Update state variable

      const docRef = doc(db, dbCollectionBrukere, params.ansattNr);
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
    <>
      <DagensInnsjekkTittel />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <Box
          sx={{
            bgcolor: "lightgray",
            height: "auto",
            width: "50vw",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid #800080",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          {stemplinger.map((stemple, index) => (
            <React.Fragment key={index}>
              {stemple.stempleInnDate && (
                <Typography
                  variant="h3"
                  component="div"
                  style={{ alignSelf: "center" }}
                >
                  Innsjekk: {stemple.stempleInnDate.getHours()}:
                  {stemple.stempleInnDate.getMinutes()}
                </Typography>
              )}
              {stemple.stempleUtDate && (
                <Typography
                  variant="h3"
                  component="div"
                  style={{ alignSelf: "center" }}
                >
                  Utsjekk: {stemple.stempleUtDate.getHours()}:
                  {stemple.stempleUtDate.getMinutes()}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}

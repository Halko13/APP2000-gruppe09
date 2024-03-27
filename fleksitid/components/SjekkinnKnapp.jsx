//Christopher W.
//Denne klassen er laget med veldig god hjelp fra chatGPT. Må muligens gå over å gjøres egen.

"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import {
  db,
  dbCollectionBrukere,
  dbCollectionBrukerStempling,
} from "@/firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import TimebankUpdater from "@/components/dashboard/TimebankUpdater";

const SjekkinnKnapp = ({ ansattNr }) => {
  const [erSjekketInn, setErSjekketInn] = useState(false);
  const [lastStemplingDocId, setLastStemplingDocId] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  useEffect(() => {
    // Sjekk om det finnes en åpen stemplingssesjon ved oppstart
    const sjekkStemplingStatus = async () => {
      const q = query(
        collection(
          db,
          dbCollectionBrukere,
          ansattNr,
          dbCollectionBrukerStempling
        ),
        where("stempleUt", "==", null)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        // Det finnes en åpen stemplingssesjon
        setLastStemplingDocId(querySnapshot.docs[0].id);
        setErSjekketInn(true);
        console.log("her");
      }
    };

    sjekkStemplingStatus();
  }, [ansattNr]);

  const handleStempling = async () => {
    const stemplingRef = collection(
      db,
      dbCollectionBrukere,
      ansattNr,
      dbCollectionBrukerStempling
    );

    try {
      if (erSjekketInn) {
        // Hvis brukeren allerede er stemplet inn, finn det åpne dokumentet og oppdater 'stempleUt'
        const docRef = doc(stemplingRef, lastStemplingDocId);
        await updateDoc(docRef, {
          stempleUt: serverTimestamp(),
        });
        const docData = (await getDoc(docRef)).data();
        const stempleInnTime = docData.stempleInn;
        const stempleUtTime = docData.stempleUt;
        setSessionData({
          stempleInn: stempleInnTime,
          stempleUt: stempleUtTime,
        });
        setLastStemplingDocId(null); // Nullstill for neste stemplingsøkt
      } else {
        // Hvis brukeren ikke er stemplet inn, opprett et nytt stemplingsdokument
        const docRef = await addDoc(stemplingRef, {
          stempleInn: serverTimestamp(),
          stempleUt: null,
        });
        setLastStemplingDocId(docRef.id); // Lagre ID for det nye dokumentet
      }

      setErSjekketInn(!erSjekketInn); // Oppdater tilstanden for å reflektere endringen
    } catch (error) {
      // Håndter eventuelle feil
      console.error("Det oppstod en feil under stempling:", error);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleStempling}>
        {erSjekketInn ? "Stemple Ut" : "Stemple Inn"}
      </Button>
      {sessionData && (
        <TimebankUpdater
          ansattNr={ansattNr}
          stempleInn={sessionData.stempleInn}
          stempleUt={sessionData.stempleUt}
        />
      )}
    </>
  );
};
export default SjekkinnKnapp;

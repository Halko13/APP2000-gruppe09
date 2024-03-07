// DagensInnsjekkComponent.js
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  collection,
  query,
  where,
  Timestamp,
  getDocs,
  doc,
  getDoc,
} from "@firebase/firestore";
import {
  db,
  dbCollectionBrukere,
  dbCollectionBrukerStempling,
} from "@/firebase/firebaseConfig"; // replace 'your-import-path' with the actual path

const DagensInnsjekkComp = ({ params }) => {
  const [brukerInfo, setBrukerInfo] = useState(null);
  const [stemplinger, setStemplinger] = useState([]);

  useEffect(() => {
    const hentBrukerInfo = async () => {
      const today = new Date();
      const startOfDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ).getTime();
      const endOfDay =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1
        ).getTime() - 1;

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

      setStemplinger(newStemplinger);

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

  if (stemplinger.length === 0) return null;
  if (!brukerInfo) return <div>Laster...</div>;

  return (
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
  );
};

export default DagensInnsjekkComp;

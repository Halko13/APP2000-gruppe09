import React, { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {
  db,
  dbCollectionBrukere,
  dbCollectionBrukerStempling,
} from "@/firebase/firebaseConfig";

export default function FetchUser({ ansattNr, setUserInfo }) {
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, dbCollectionBrukere, ansattNr);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists) {
        setUserInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchData();
  }, [ansattNr, setUserInfo]);

  return null;
}

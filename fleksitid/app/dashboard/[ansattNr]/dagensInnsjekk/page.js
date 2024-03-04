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
import { Box, Typography } from "@mui/material";
import DagensInnsjekkTittel from "@/components/dashboard/dagensInnsjekk/InnsjekkTittel";
import DagensInnsjekkComp from "@/components/dashboard/dagensInnsjekk/DagensInsjekkComp";
import DagensDato from "@/components/dashboard/dagensInnsjekk/DagensInsjekkDato";
export default function Page({ params }) {
  return (
    <>
      <DagensInnsjekkTittel />
      <DagensDato />
      <DagensInnsjekkComp params={params} />
    </>
  );
}

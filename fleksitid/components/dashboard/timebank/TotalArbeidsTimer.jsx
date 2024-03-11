// Developed by Halvor Vilnes
"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { beregnTimerogMinutter } from "@/components/dashboard/timebank/tidBeregning";
import { fetchData } from "@/components/dashboard/timebank/GetArbeidsTimer"; // replace with the path to the fetchData file
export default function TotalArbeidstimer(params) {
  const brukerData = fetchData(params.params.ansattNr);
  console.log(brukerData);
  const [TotalArbeidstimer, setTotalArbeidstimer] = useState(); // Total arbeidstimer i uken
  console.log(params);
  console.log("TotalArbeidstimer", TotalArbeidstimer);
  const dummyArbeidstimer = 50;
  const { timer, minutter } = beregnTimerogMinutter(TotalArbeidstimer);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const data = await fetchData(params.params.ansattNr);
        setTotalArbeidstimer(data.AntallJobbTimer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, [params.params.ansattNr]);
  return (
    <>
      <Box
        sx={{
          bgcolor: "lightgray",
          height: "30vh",
          width: "50vw",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid #800080",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          style={{
            marginBottom: "20px",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Totale arbeidstimer i uken
        </Typography>
        <Typography
          variant="h2"
          component="div"
          style={{ alignSelf: "center" }}
        >
          {timer} timer
        </Typography>
        <Typography
          variant="h2"
          component="div"
          style={{ alignSelf: "center" }}
        >
          {minutter} minutter
        </Typography>
      </Box>
    </>
  );
}

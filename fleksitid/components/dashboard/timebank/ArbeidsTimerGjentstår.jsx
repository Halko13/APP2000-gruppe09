// Developed by Halvor Vilnes
"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { beregnTimerogMinutter } from "@/components/dashboard/timebank/tidBeregning";
export default function ArbeidsTimerGjenstår(params) {
  const [ArbeidstimerGjenstår, setArbeidstimerGjenstår] = useState(0); // Arbeidstimer som gjenstår i uken
  const dummyArbeidstimerGjenstår = 40;
  const { timer, minutter } = beregnTimerogMinutter(dummyArbeidstimerGjenstår);
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
          Gjenstående arbeidstimer
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

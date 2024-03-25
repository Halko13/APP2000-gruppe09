// Developed by Halvor Vilnes
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { beregnTimerogMinutter } from "@/components/dashboard/timebank/tidBeregning";
export default function ArbeidsTimerGjenstår({ ArbeidsTimerGjenstår }) {
  const { timer: timer, minutter: minutter } =
    beregnTimerogMinutter(ArbeidsTimerGjenstår);
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

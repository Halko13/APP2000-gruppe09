// Utviket av Halvor Vilnes
"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Timebank() {
  const [timebank, setTimebank] = React.useState(0);
  const dummyTimebank = 100;
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
          border: "3px solid #800080", // Set the border color to #800080
        }}
      >
        <Typography
          variant="h2"
          component="div"
          style={{ marginBottom: "20px", alignSelf: "center" }}
        >
          Timebank
        </Typography>
        <Typography
          variant="h2"
          component="div"
          style={{ alignSelf: "center" }}
        >
          {dummyTimebank} timer
        </Typography>
      </Box>
    </>
  );
}

// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SlettBrukerTittel() {
  //MUI Component
  // https://mui.com/material-ui/react-typography/
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        textAlign: "center",
        margin: "0 auto",
        padding: "2rem 0 2rem 0",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem" }} gutterBottom>
        Slett en bruker
      </Typography>
    </Box>
  );
}

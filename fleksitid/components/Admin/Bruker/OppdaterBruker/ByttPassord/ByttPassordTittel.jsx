// Utviklet av Halvor Vilnes

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ByttPassordTittel() {
  //MUI component
  //https://mui.com/material-ui/react-typography/
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1000,
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem" }} gutterBottom>
        Bytt Passord
      </Typography>
    </Box>
  );
}

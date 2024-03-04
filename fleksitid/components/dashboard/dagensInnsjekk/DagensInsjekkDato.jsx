import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DagensDato() {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

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
      <Typography variant="h2" sx={{ fontSize: "4.5rem" }} gutterBottom>
        {date}
      </Typography>
    </Box>
  );
}

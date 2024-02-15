// Utviklet av Halvor Vilnes

import React from "react";
import { Box } from "@mui/material";
import Timebank from "@/components/dashboard/timebank/Timebankinfo";
import TotalArbeidstimer from "@/components/dashboard/timebank/TotalArbeidsTimer";
import ArbeidsTimerGjenstår from "@/components/dashboard/timebank/ArbeidsTimerGjentstår";
// Komponenter

export default function TimebankSide(params) {
  return (
    <main>
      <Box style={{ margin: "20px 0" }}>
        <Box style={{ marginTop: "20px" }}>
          <Timebank />
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <TotalArbeidstimer />
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <ArbeidsTimerGjenstår />
        </Box>
      </Box>
    </main>
  );
}

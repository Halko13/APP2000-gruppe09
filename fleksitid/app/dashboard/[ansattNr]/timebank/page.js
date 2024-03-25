// Utviklet av Halvor Vilnes
"use client";
import React from "react";
import { Box } from "@mui/material";
import Timebank from "@/components/dashboard/timebank/Timebankinfo";
import TotalArbeidstimer from "@/components/dashboard/timebank/TotalArbeidsTimer";
import ArbeidsTimerGjenstår from "@/components/dashboard/timebank/ArbeidsTimerGjentstår";
import { useState } from "react";
import FetchUser from "@/components/dashboard/timebank/Fetchuser";
// Komponenter
// State

export default function TimebankSide(params) {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <main>
      <FetchUser ansattNr={params.params.ansattNr} setUserInfo={setUserInfo} />;
      <Box style={{ margin: "20px 0" }}>
        <Box style={{ marginTop: "20px" }}>
          <Timebank />
        </Box>
        <Box style={{ marginTop: "20px" }}>
          {userInfo && (
            <TotalArbeidstimer Timebank={userInfo.AntallJobbTimer} />
          )}
        </Box>
        <Box style={{ marginTop: "20px" }}>
          {userInfo && (
            <ArbeidsTimerGjenstår ArbeidsTimerGjenstår={userInfo.Timebank} />
          )}
        </Box>
      </Box>
    </main>
  );
}

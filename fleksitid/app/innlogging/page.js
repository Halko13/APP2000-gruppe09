"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Typography, ThemeProvider, Button, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import AnsattInnlogging from "@/components/AnsattInnlogging";
import AdminInnlogging from "@/components/AdminInnlogging";
import NummerPad from "@/components/NummerPad";
import VelgBrukerListe from "@/components/HenteBruker";
import teama from "@/components/Temaer/Tema";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import bcryptVerify from "@/components/Hash/HashingVerifisering";

const InnloggingSide = () => {
  // Start verdi
  const router = useRouter();
  const [valgtBrukerId, setValgtBrukerId] = useState("");
  const [pin, setPin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [aktivSide, setAktivSide] = useState("VelgBrukerListe");
  const [forrigeAktivSide, setForrigeAktivSide] = useState("");
  const [erAdmin, setErAdmin] = useState(false);

  // Firstore variabler
  const [brukere, setBrukere] = useState([]); // Holder på alle brukere
  const [adminBrukere, setAdminBrukere] = useState([]); // Holder på admin brukere

  // Hente brukere fra firestore, fra chatGtp
  useEffect(() => {
    const hentBrukere = async () => {
      const brukerReferanser = collection(db, "Brukere");
      const brukerData = await getDocs(brukerReferanser);
      const brukerListe = brukerData.docs.map((dok) => ({
        id: dok.id,
        ...dok.data(),
      }));
      setBrukere(brukerListe);

      // Admin brukere fra firestore
      const adminBrukere = brukerListe.filter((bruker) => bruker.erAdmin);
      setAdminBrukere(adminBrukere);
    };
    hentBrukere();
  }, []);

  // Henter bruker fra hjemme siden
  useEffect(() => {
    // Henter brukerId fra Local Storage når siden lastes
    const hentaBrukerId = localStorage.getItem("brukerId");
    if (hentaBrukerId) {
      setValgtBrukerId(hentaBrukerId);
    }
  }, []);

  // Håndterer bruker endring verdier
  const håndterBrukerEndring = (e) => {
    const idVerdi = e.target.value;
    const bruker = brukere.find((verdi) => verdi.id === idVerdi);
    setValgtBrukerId(idVerdi);
    setErAdmin(bruker?.erAdmin || false);
    setPin("");
    setLoginStatus("");
  };

  const håndterPinKodeEndring = (e) => {
    setPin(e.target.value);
  };

  // Sjekk av bruker og admin bruker kan logge seg inn
  const validerLogin = async () => {
    const valgtBruker = brukere.find((bruker) => bruker.id === valgtBrukerId);
    if (valgtBruker) {
      const liktPassord = await bcryptVerify(pin, valgtBruker.Passord);
      //TODO Legge til error håndtering
      if (valgtBruker.ErAdmin && liktPassord) {
        setLoginStatus(
          "Logget inn som admin. Velkommen " + valgtBruker.Fornavn + "!"
        );
        // Til admin siden
        window.location.href = "/admin";
      } else if (!valgtBruker.ErAdmin && liktPassord) {
        setLoginStatus(
          `Logget inn. Velkommen ${valgtBruker.Fornavn} ${valgtBruker.Etternavn}!`
        );
        // Til ansatt siden
        //window.location.href = "test/2";
        router.push(`dashboard/${valgtBrukerId}/sjekkinn`);
      } else {
        setLoginStatus("Innlogging feilet. Feil navn eller pin kode!");
      }
    }
  };

  const håndterInnlogin = (e) => {
    e.preventDefault();
    validerLogin();
  };

  // Tasatur funksjon
  useEffect(() => {
    const håndterTaseTrykk = (e) => {
      if (e.key >= "0" && e.key <= "9") {
        setPin((prevPin) => prevPin + e.key);
      } else if (e.key === "Enter") {
        validerLogin();
      } else if (e.key === "Backspace") {
        setPin((prevPin) => prevPin.slice(0, -1));
      }
    };
    window.addEventListener("keydown", håndterTaseTrykk);
    return () => {
      window.removeEventListener("keydown", håndterTaseTrykk);
    };
  }, [pin, validerLogin]);

  // Nummer pad innloggin
  const håndterNummerKlikk = (nummer) => {
    setPin((forgjePin) => forgjePin + nummer); // Legger til sifferet til PIN-koden
  };

  const håndterSlett = () => {
    setPin((forgjePin) => forgjePin.slice(0, -1)); // Sletter siste siffer
  };

  const håndterEnter = () => {
    håndterInnlogin();
  };

  const gåTilbake = () => {
    if (aktivSide !== "VelgBrukerListe") {
      setAktivSide(forrigeAktivSide);
    } else {
      window.location.href = "/";
    }
  };

  const gåTilInnlogging = () => {
    if (!valgtBrukerId) {
      setLoginStatus("Vennligst velg en bruker før du går videre");
      return;
    }
    setForrigeAktivSide(aktivSide);
    setAktivSide("innlogging");
    setLoginStatus("");
  };

  return (
    <ThemeProvider theme={teama}>
      <div>
        <div>
          <Typography variant="h2" gutterBottom>
            Velkommen{" "}
            {erAdmin
              ? adminBrukere.find((admin) => admin.brukernavn === valgtBrukerId)
                  ?.brukernavn
              : `${
                  brukere.find((bruker) => bruker.id === valgtBrukerId)?.Fornavn
                } 
                ${
                  brukere.find((bruker) => bruker.id === valgtBrukerId)
                    ?.Etternavn
                }`}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Logget på som:{" "}
            {erAdmin
              ? adminBrukere.find((admin) => admin.brukernavn === valgtBrukerId)
                  ?.brukernavn || "Ukjent Admin"
              : `${
                  brukere.find((bruker) => bruker.id === valgtBrukerId)?.Fornavn
                } 
                ${
                  brukere.find((bruker) => bruker.id === valgtBrukerId)
                    ?.Etternavn
                }` || "Ukjent Bruker"}
          </Typography>
          {erAdmin ? (
            <div>
              <AdminInnlogging
                adminBruker={adminBrukere}
                passord={pin}
                vedPassordEndring={håndterPinKodeEndring}
                vedLoginKlikk={håndterInnlogin}
              />
            </div>
          ) : (
            <div>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginTop: "50px" }}
              >
                For skjerminnlogging
              </Typography>
              <NummerPad
                vedNumKlikk={håndterNummerKlikk}
                vedSlett={håndterSlett}
                vedEnter={håndterEnter}
              />
              <AnsattInnlogging
                pin={pin}
                håndterPinnEndring={håndterPinKodeEndring}
                håndterInnlogin={håndterInnlogin}
              />
            </div>
          )}
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={gåTilbake}
          style={{ marginTop: 75 }}
        >
          Gå tilbake til hovedsiden
        </Button>
        {loginStatus && (
          <Typography variant="h5" style={{ marginTop: "15px" }}>
            {loginStatus}
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
};

export default InnloggingSide;

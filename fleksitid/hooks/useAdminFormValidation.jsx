// Utviklet av Halvor Vilnes

import * as React from "react";

import { ADMIN_PASSORD_LENGTH } from "@/components/Admin/AdminBruker/NyAdminBruker/NyAdminBrukerSkjema";

export const useAdminFormValidation = (formData) => {
  const [passordError, setPassordError] = React.useState(false); // Changed from passwordError to passordError

  // Bruker regex for å sjekke om det kun er nummer
  // TODO endre kommentarer
  React.useEffect(() => {
    const isValid =
      formData.Brukernavn &&
      formData.Epost &&
      formData.Passord === formData.GjentaPassord && // Changed from Password to Passord and GjentaPassword to GjentaPassord
      formData.Passord.length >= ADMIN_PASSORD_LENGTH; // Changed from Password to Passord

    setPassordError(!isValid); // Changed from setPasswordError to setPassordError
  }, [formData]);

  return passordError; // Changed from passwordError to passordError
};

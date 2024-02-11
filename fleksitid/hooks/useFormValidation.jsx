// Utviklet av Halvor Vilnes

import * as React from "react";

import { PASSWORD_LENGTH } from "@/components/Admin/Bruker/NyBruker/NyBrukerTextFields";

export const useFormValidation = (formData) => {
  const [passordError, setPassordError] = React.useState(false); // Changed from passwordError to passordError

  // Bruker regex for å sjekke om det kun er nummer
  const isNumeric = (value) => /^[0-9]+$/.test(value);
  // TODO endre kommentarer
  React.useEffect(() => {
    const isValid =
      formData.AnsattNr &&
      formData.Fornavn &&
      formData.Etternavn &&
      formData.Epost &&
      formData.Stilling &&
      formData.Avdeling &&
      isNumeric(formData.Passord) && // Changed from Password to Passord
      isNumeric(formData.GjentaPassord) && // Changed from GjentaPassword to GjentaPassord
      formData.Passord === formData.GjentaPassord && // Changed from Password to Passord and GjentaPassword to GjentaPassord
      formData.Passord.length === PASSWORD_LENGTH; // Changed from Password to Passord

    setPassordError(!isValid); // Changed from setPasswordError to setPassordError
  }, [formData]);

  return passordError; // Changed from passwordError to passordError
};

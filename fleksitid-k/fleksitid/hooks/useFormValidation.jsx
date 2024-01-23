// Utviklet av Halvor Vilnes

import * as React from "react";

import { PASSWORD_LENGTH } from "@/components/Admin/NyBruker/NyBrukerTextFields";

export const useFormValidation = (formData) => {
  const [passwordError, setPasswordError] = React.useState(false);

  // Bruker regex for å sjekke om det kun er nummer
  const isNumeric = (value) => /^[0-9]+$/.test(value);

  React.useEffect(() => {
    const isValid =
      formData.AnsattNr &&
      formData.Fornavn &&
      formData.Etternavn &&
      formData.Stilling &&
      isNumeric(formData.Password) &&
      isNumeric(formData.GjentaPassword) &&
      formData.Password === formData.GjentaPassword &&
      formData.Password.length === PASSWORD_LENGTH;

    setPasswordError(!isValid);
  }, [formData]);

  return passwordError;
};

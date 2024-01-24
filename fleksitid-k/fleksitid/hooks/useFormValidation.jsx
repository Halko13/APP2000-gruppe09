// useFormValidation.js
import * as React from 'react';

import { PASSWORD_LENGTH } from "@/components/nyBrukerTextFields";

export const useFormValidation = (formData) => {
  const [passwordError, setPasswordError] = React.useState(false);

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

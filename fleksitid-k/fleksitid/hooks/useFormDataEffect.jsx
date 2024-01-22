// useFormDataEffect.js
import * as React from 'react';

export const useFormDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById('AnsattNr').value = formData.AnsattNr;
    document.getElementById('Fornavn').value = formData.Fornavn;
    document.getElementById('Etternavn').value = formData.Etternavn;
    document.getElementById('Stilling').value = formData.Stilling;
    document.getElementById('AntallJobbtimer').value = formData.AntallJobbtimer;
    document.getElementById('Password').value = formData.Password;
    document.getElementById('GjentaPassword').value = formData.GjentaPassword;
  }, [formData]);
};

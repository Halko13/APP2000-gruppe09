// useFormDataEffect.js
import * as React from 'react';

export const useFormDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById('AnsattNr').value = formData.AnsattNr;
    document.getElementById('Fornavn').value = formData.Fornavn;
    document.getElementById('Etternavn').value = formData.Etternavn;
    document.getElementById('Stilling').value = formData.Stilling;
    document.getElementById('antallJobbtimer').value = formData.antallJobbtimer;
    document.getElementById('password').value = formData.password;
    document.getElementById('gjentaPassword').value = formData.gjentaPassword;
  }, [formData]);
};

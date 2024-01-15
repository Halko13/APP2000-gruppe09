// useFormDataEffect.js
import * as React from 'react';

export const useResetFinnBrukerForm = (formData) => {
  React.useEffect(() => {
    document.getElementById('AnsattNr').value = formData.AnsattNr;
  }, [formData]);
};

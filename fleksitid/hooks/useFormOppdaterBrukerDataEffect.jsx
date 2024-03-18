import * as React from "react";

export const useFormOppdaterBrukerDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById("AnsattNr").value = formData.AnsattNr;
    document.getElementById("Fornavn").value = formData.Fornavn;
    document.getElementById("Etternavn").value = formData.Etternavn;
    document.getElementById("Epost").value = formData.Epost;
    document.getElementById("Stilling").value = formData.Stilling;
    document.getElementById("Avdeling").value = formData.Avdeling;
    document.getElementById("AntallJobbTimer").value = formData.AntallJobbTimer;
  }, [formData]);
};

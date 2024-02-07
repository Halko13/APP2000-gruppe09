// Utviklet av Halvor Vilnes

import * as React from "react";
export const useFormDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById("AnsattNr").value = formData.AnsattNr || "";
    document.getElementById("Fornavn").value = formData.Fornavn || "";
    document.getElementById("Etternavn").value = formData.Etternavn || "";
    document.getElementById("Epost").value = formData.Epost || "";
    document.getElementById("Stilling").value = formData.Stilling || "";
    document.getElementById("Avdeling").value = formData.Avdeling || "";
    document.getElementById("AntallJobbTimer").value =
      formData.AntallJobbTimer || "";
    document.getElementById("Passord").value = formData.Passord || "";
    document.getElementById("GjentaPassord").value =
      formData.GjentaPassord || "";
  }, [formData]);
};

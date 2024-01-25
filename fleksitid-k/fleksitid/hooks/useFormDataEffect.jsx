// Utviklet av Halvor Vilnes

import * as React from "react";

export const useFormDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById("AnsattNr").value = formData.AnsattNr;
    document.getElementById("Fornavn").value = formData.Fornavn;
    document.getElementById("Etternavn").value = formData.Etternavn;
    document.getElementById("Stilling").value = formData.Stilling;
    document.getElementById("AntallJobbTimer").value = formData.AntallJobbTimer;
    document.getElementById("Passord").value = formData.Passord;
    document.getElementById("GjentaPassord").value = formData.GjentaPassord;

    // Check if the checkbox element exists before setting the checked property
    const erAdminCheckbox = document.getElementById("ErAdmin");
    if (erAdminCheckbox) {
      erAdminCheckbox.checked =
        formData.ErAdmin === undefined ? false : formData.ErAdmin; //Hvis undefined(Ikke klikket) = false, else true
    }
  }, [formData]);
};

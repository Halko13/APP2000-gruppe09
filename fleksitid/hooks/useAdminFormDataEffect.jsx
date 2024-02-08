// Utviklet av Halvor Vilnes

import * as React from "react";
export const useAdminFormDataEffect = (formData) => {
  React.useEffect(() => {
    document.getElementById("Brukernavn").value = formData.Brukernavn || "";
    document.getElementById("Epost").value = formData.Epost || "";
    document.getElementById("Passord").value = formData.Passord || "";
    document.getElementById("GjentaPassord").value =
      formData.GjentaPassord || "";
  }, [formData]);
};

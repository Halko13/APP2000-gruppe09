// Utviklet av Halvor Vilnes

import * as React from "react";

export const useResetFinnAdminBrukerForm = (formData) => {
  React.useEffect(() => {
    document.getElementById("Brukernavn").value = formData.Brukernavn;
  }, [formData]);
};

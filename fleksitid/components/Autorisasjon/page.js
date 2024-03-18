// 'use client';

// import React, { useEffect, useState } from 'react';

// const forAutorisasjon = (Rettighetersjekk, { hvilkenRolle }) => {
//     const BeskyttKomponent = (p) => {
//         const [erAutorisert, settErAutorisert] = useState(false);

//         useEffect(() => {
//             const rolle = localStorage.getItem('brukerRolle');
//             if (rolle === hvilkenRolle) {
//                 settErAutorisert(true);
//             } else {
//                 import('next/router').then(({ useRouter }) => {
//                     const ruter = useRouter();
//                     ruter.push('/logginn');
//                 });
//             }
//         }, [hvilkenRolle]);

//         if (!erAutorisert) {
//             return null;
//         }

//         return <Rettighetersjekk {...p} />;
//     };

//     return BeskyttKomponent;
// };

// export default forAutorisasjon;
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter at the top level

const forAutorisasjon = (Rettighetersjekk, { hvilkenRolle }) => {
  const BeskyttKomponent = (p) => {
    const [erAutorisert, settErAutorisert] = useState(false);
    const ruter = useRouter(); // Call useRouter at the top level

    useEffect(() => {
      const rolle = localStorage.getItem("brukerRolle");
      if (rolle === hvilkenRolle) {
        settErAutorisert(true);
      } else {
        ruter.push("/logginn");
      }
    }, []); // Remove hvilkenRolle from the dependency array

    if (!erAutorisert) {
      return null;
    }

    return <Rettighetersjekk {...p} />;
  };

  return BeskyttKomponent;
};

export default forAutorisasjon;

"use client";
import { useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db, dbCollectionBrukere } from "@/firebase/firebaseConfig";
const TimebankUpdater = ({ ansattNr, stempleInn, stempleUt }) => {
  useEffect(() => {
    console.log(
      "TimebankUpdater: " + ansattNr + " " + stempleInn + " " + stempleUt
    );
    const updateTimebank = async () => {
      try {
        if (stempleUt !== null) {
          const timeDifference = stempleUt * 1000 - stempleInn * 1000; // Beregner tidsdifferanse i millisekunder
          // console.log("timeDifference:", timeDifference); // log timeDifference

          const minutesDifference = timeDifference / 1000 / 60; // Konverterer til minutter
          // console.log("minutesDifference:", minutesDifference);

          // Konverterer minutter til timer
          const hoursDifference = parseFloat(
            (minutesDifference / 60).toFixed(4)
          );
          // console.log("hoursDifference:", hoursDifference); // log hoursDifference

          const ansattRef = doc(db, dbCollectionBrukere, ansattNr);
          const ansattData = (await getDoc(ansattRef)).data();
          const updatedTimebank = ansattData.Timebank - hoursDifference;

          await updateDoc(ansattRef, { Timebank: updatedTimebank });
          console.log("Updating timebank..." + hoursDifference);
        }
      } catch (error) {
        console.error("Error updating timebank: ", error);
      }
    };
    updateTimebank();
  }, [ansattNr, stempleInn, stempleUt]);

  return null;
};
export default TimebankUpdater;

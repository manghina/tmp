import { useState } from "react";

export const useProfessionalOfferDetailScreen = () => {
  const [accepted, setAccepted] = useState(false);


  return {
    accepted,
    setAccepted,
  };
};

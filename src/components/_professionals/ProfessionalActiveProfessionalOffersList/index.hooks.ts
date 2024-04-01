import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useMemo } from "react";

export const useProfessionalActiveProfessionalOffersList = () => {
  const activeProfessionalOffers = useSelector(
    selectors.getActiveProfessionalOffersList,
  );

  const onProfessionalOfferClickedCallbacks = useMemo(
    () => activeProfessionalOffers.map((professionalOffer) => () => {}),
    [activeProfessionalOffers],
  );

  return {
    activeProfessionalOffers,
    onProfessionalOfferClickedCallbacks,
  };
};

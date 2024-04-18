import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useRequestConfirmPaymentScreen = () => {
  const professionalOffer = useSelector(selectors.getChosenProfessionalOffer);
  const slot = useSelector(selectors.getChosenSlot);

  return { professionalOffer, slot };
};

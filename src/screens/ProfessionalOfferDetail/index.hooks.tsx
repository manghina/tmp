import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { Alert } from "react-native";

export enum ProfessionalOfferDecision {
  NONE,
  ACCEPT,
  REJECT,
  CALL_ER,
}

export const useProfessionalOfferDetailScreen = () => {
  const [decision, setDecision] = React.useState<ProfessionalOfferDecision>(
    ProfessionalOfferDecision.NONE,
  );

  const currentProfessionalOffer = useSelector(
    selectors.getCurrentProfessionalOffer,
  );
  const isFetchingProfessionalOffer = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.getProfessionalsMeProfessionalOffersByProfessionalOfferId.api,
    ),
  );

  const onAcceptRequestPressed = useCallback(() => {
    setDecision(ProfessionalOfferDecision.ACCEPT);
  }, []);
  const onRejectRequestPressed = useCallback(() => {
    Alert.alert("TODO: Rejection");
  }, []);
  const onCallERPressed = useCallback(() => {
    Alert.alert("TODO: Call ER");
  }, []);

  return {
    isFetchingProfessionalOffer,
    currentProfessionalOffer,
    onAcceptRequestPressed,
    onRejectRequestPressed,
    onCallERPressed,
    decision,
  };
};

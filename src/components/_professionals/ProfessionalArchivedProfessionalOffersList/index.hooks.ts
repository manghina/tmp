import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import { RequestCardProps } from "src/components/RequestCard";
import { RequestStatus } from "src/models/Request";
import { CardStatus } from "src/components/RequestCard/index.hooks";
import { Alert } from "react-native";

export const useProfessionalArchivedProfessionalOffersList = () => {
  const dispatch = useDispatch();

  const isLoadingProfessionalOffers = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.getProfessionalsMeProfessionalOffers.api,
    ),
  );
  const archivedTotalCount = useSelector(
    selectors.getProfessionalOfferArchivedTotalCount,
  );
  const archivedProfessionalOffers = useSelector(
    selectors.getArchivedProfessionalOffersList,
  );

  const onProfessionalOfferClickedCallbacks = useMemo(
    () => archivedProfessionalOffers.map((professionalOffer) => () => {}),
    [archivedProfessionalOffers],
  );

  const hasMore = useMemo(
    () => (archivedTotalCount ?? 0) < archivedProfessionalOffers.length,
    [archivedProfessionalOffers, archivedTotalCount],
  );

  const onLoadMoreArchivedOffersClicked = useCallback(() => {
    if (isLoadingProfessionalOffers) {
      return;
    }

    dispatch(actions.increaseArchivedProfessionalOffersPage());
  }, [dispatch, isLoadingProfessionalOffers]);

  const cards = useMemo<RequestCardProps[]>(
    () =>
      archivedProfessionalOffers.map((professionalOffer) => {
        return {
          _id: professionalOffer._id ?? "-",
          title:
            professionalOffer.request.currentStatus ===
            RequestStatus.INFORMATION_COLLECTED
              ? `Nuova richiesta da ${professionalOffer.request.user.lastName}`
              : `Richiesta da ${professionalOffer.request.user.lastName}`,
          description: "-",
          status: CardStatus.PLAIN,
          onPress: () => {
            Alert.alert("TODO: Implement onPress");
          },
        };
      }),
    [archivedProfessionalOffers],
  );

  return {
    hasMore,
    isLoadingProfessionalOffers,
    cards,
    onProfessionalOfferClickedCallbacks,
    onLoadMoreArchivedOffersClicked,
  };
};

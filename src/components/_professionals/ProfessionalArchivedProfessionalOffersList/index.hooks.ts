import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";

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

  return {
    hasMore,
    isLoadingProfessionalOffers,
    archivedProfessionalOffers,
    onProfessionalOfferClickedCallbacks,
    onLoadMoreArchivedOffersClicked,
  };
};

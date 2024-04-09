import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

export const useUserChooseProfessionalOfferScreen = () => {
  const dispatch = useDispatch();

  const currentRequest = useSelector(selectors.getCurrentRequest);

  useEffect(() => {
    if (currentRequest) {
      dispatch(
        actions.getUsersMeRequestsProfessionalOffersByRequestId.request({
          requestId: currentRequest._id,
        }),
      );
    }
  }, [dispatch, currentRequest]);

  return {};
};

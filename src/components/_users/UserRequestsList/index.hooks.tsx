import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import { Request, RequestStatus } from "src/models/Request";
import { useNavigation } from "@react-navigation/native";
import { RequestCardProps } from "src/components/RequestCard";
import { CardStatus } from "src/components/RequestCard/index.hooks";

export const useUserRequestsList = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const requestsList = useSelector(selectors.getRequestsList);

  const onCardPressed = useCallback(
    (request: Request) => {
      dispatch(actions.setCurrentRequest(request.toInterface()));
      dispatch(
        actions.getUsersMeRequestsByRequestId.request({
          requestId: request._id,
        }),
      );

      switch (request.currentStatus) {
        case RequestStatus.COLLECTING_INFORMATION:
          navigation.navigate("requests/chat");
          return;
        case RequestStatus.PROFESSIONAL_OFFERS_CREATED:
          navigation.navigate("requests/professional-offers");
          return;
        default:
          break;
      }
    },
    [dispatch, navigation],
  );

  const cards = useMemo<RequestCardProps[]>(
    () =>
      requestsList.map((request) => ({
        _id: request._id,
        status:
          {
            [RequestStatus.COLLECTING_INFORMATION]: CardStatus.PLAIN,
            [RequestStatus.INFORMATION_COLLECTED]: CardStatus.EXPIRING,
            [RequestStatus.PROFESSIONAL_OFFERS_CREATED]: CardStatus.PLAIN,
            [RequestStatus.CLOSED]: CardStatus.PLAIN,
          }[request.currentStatus] || CardStatus.PLAIN,
        title:
          {
            [RequestStatus.COLLECTING_INFORMATION]: "Completa la richiesta",
            [RequestStatus.INFORMATION_COLLECTED]: "Richiesta completata",
            [RequestStatus.PROFESSIONAL_OFFERS_CREATED]: "In attesa di offerte",
            [RequestStatus.CLOSED]: "Richiesta scaduta",
          }[request.currentStatus] || "???",
        description: "-",
        onPress: () => onCardPressed(request),
      })),
    [requestsList, onCardPressed],
  );

  return { cards };
};

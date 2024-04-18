import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useCallback, useMemo } from "react";
import { Request, RequestStatus } from "src/models/Request";
import { useNavigation } from "@react-navigation/native";
import { RequestCardProps } from "src/components/RequestCard";
import { CardStatus } from "src/components/RequestCard/index.hooks";
import { RequestChatScreen } from "@app/screens/RequestChat";
import { RequestSearchProfessionalsScreen } from "@app/screens/RequestSearchProfessionals";
import { UserChooseProfessionalOfferScreen } from "@app/screens/UserChooseProfessionalOffer";
import { UserRequestAppointmentDetailsScreen } from "@app/screens/UserRequestAppointmentDetails";

export const useUserRequestsList = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const requestsList = useSelector(selectors.getRequestsList);

  const onCardPressedCallbacks = useMemo(
    () =>
      requestsList.map((request) => () => {
        dispatch(actions.setCurrentRequest(request.toInterface()));
        dispatch(
          actions.getUsersMeRequestsByRequestId.request({
            requestId: request._id,
          }),
        );
        dispatch(
          actions.getUsersMeRequestsProfessionalOffersByRequestId.request({
            requestId: request._id,
          }),
        );

        switch (request.currentStatus) {
          case RequestStatus.COLLECTING_INFORMATION:
            navigation.navigate(RequestChatScreen.RouteName);
            return;
          case RequestStatus.PROFESSIONAL_OFFERS_CREATED:
            navigation.navigate(RequestSearchProfessionalsScreen.RouteName);
            return;
          case RequestStatus.PROFESSIONAL_OFFERS_FILLED:
            navigation.navigate(UserChooseProfessionalOfferScreen.RouteName);
            return;
          case RequestStatus.VERIFYING_PAYMENT:
          case RequestStatus.APPOINTMENT_SCHEDULED:
          case RequestStatus.APPOINTMENT_COMPLETED:
            navigation.navigate(UserRequestAppointmentDetailsScreen.RouteName);
            return;
          default:
            break;
        }
      }),
    [requestsList, dispatch, navigation],
  );

  const cards = useMemo<RequestCardProps[]>(
    () =>
      requestsList.map((request, index) => ({
        _id: request._id,
        status:
          {
            [RequestStatus.COLLECTING_INFORMATION]: CardStatus.PLAIN,
            [RequestStatus.INFORMATION_COLLECTED]: CardStatus.EXPIRING,
            [RequestStatus.PROFESSIONAL_OFFERS_CREATED]: CardStatus.PLAIN,
            [RequestStatus.PROFESSIONAL_OFFERS_FILLED]: CardStatus.PLAIN,
            [RequestStatus.VERIFYING_PAYMENT]: CardStatus.BOOKED,
            [RequestStatus.APPOINTMENT_SCHEDULED]: CardStatus.BOOKED,
            [RequestStatus.APPOINTMENT_COMPLETED]: CardStatus.BOOKED,
          }[request.currentStatus] || CardStatus.PLAIN,
        title:
          {
            [RequestStatus.COLLECTING_INFORMATION]: "Completa la richiesta",
            [RequestStatus.INFORMATION_COLLECTED]: "Richiesta completata",
            [RequestStatus.PROFESSIONAL_OFFERS_CREATED]: "In attesa di offerte",
            [RequestStatus.PROFESSIONAL_OFFERS_FILLED]: "Offerte disponibili",
            [RequestStatus.VERIFYING_PAYMENT]: "Appuntamento programmato",
            [RequestStatus.APPOINTMENT_SCHEDULED]: "Appuntamento programmato",
            [RequestStatus.APPOINTMENT_COMPLETED]: "Richiesta completata",
          }[request.currentStatus] || "???",
        description: "-",
        onPress: onCardPressedCallbacks[index],
      })),
    [requestsList, onCardPressedCallbacks],
  );

  return { cards };
};

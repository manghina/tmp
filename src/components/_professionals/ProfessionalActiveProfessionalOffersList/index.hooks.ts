import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useMemo } from "react";
import { RequestStatus } from "src/models/Request";
import { RequestCardProps } from "src/components/RequestCard";
import { CardStatus } from "src/components/RequestCard/index.hooks";
import { useNavigation } from "@react-navigation/native";

export const useProfessionalActiveProfessionalOffersList = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation<any>();

  const activeProfessionalOffers = useSelector(
    selectors.getActiveProfessionalOffersList,
  );

  const cards = useMemo<RequestCardProps[]>(
    () =>
      activeProfessionalOffers.map((professionalOffer) => {
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
            dispatch(
              actions.getProfessionalsMeProfessionalOffersByProfessionalOfferId.request(
                {
                  professionalOfferId: professionalOffer._id,
                },
              ),
            );
            navigator.navigate("professional-offers/details");
          },
        };
      }),
    [activeProfessionalOffers],
  );

  return {
    cards,
  };
};

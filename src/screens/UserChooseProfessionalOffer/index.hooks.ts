import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { RequestConfirmPaymentScreen } from "@app/screens/RequestConfirmPayment";

export type ProfessionalOffersFormData = {
  professionalOfferId: string;
  slotId: string;
};

const schema = yup.object().shape({
  professionalOfferId: yup.string().required(),
  slotId: yup.string().required(),
});

export const useUserChooseProfessionalOfferScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const currentRequest = useSelector(selectors.getCurrentRequest);
  const isFetchingProfessionalOffers = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.getUsersMeRequestsProfessionalOffersByRequestId.api,
    ),
  );

  const formData = useForm<ProfessionalOffersFormData>({
    resolver: yupResolver(schema),
  });

  const { control } = formData;

  const [professionalOfferId, slotId] = useWatch({
    control,
    name: ["professionalOfferId", "slotId"],
  });

  const onSubmit = useCallback(() => {
    dispatch(actions.setChosenProfessionalOfferId(professionalOfferId));
    dispatch(actions.setChosenSlotId(slotId));

    navigation.navigate(RequestConfirmPaymentScreen.RouteName);
  }, [navigation, professionalOfferId, slotId]);

  const slotChosen = useMemo(
    () => Boolean(professionalOfferId) && Boolean(slotId),
    [professionalOfferId, slotId],
  );

  useEffect(() => {
    if (currentRequest) {
      dispatch(
        actions.getUsersMeRequestsProfessionalOffersByRequestId.request({
          requestId: currentRequest._id,
        }),
      );
    }
  }, [dispatch, currentRequest]);

  return { isFetchingProfessionalOffers, formData, slotChosen, onSubmit };
};

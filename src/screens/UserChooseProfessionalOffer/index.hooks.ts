import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const currentRequest = useSelector(selectors.getCurrentRequest);

  const formData = useForm<ProfessionalOffersFormData>({
    resolver: yupResolver(schema),
  });

  const { control } = formData;

  const [professionalOfferId, slotId] = useWatch({
    control,
    name: ["professionalOfferId", "slotId"],
  });

  const onSubmit = useCallback(() => {}, []);

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

  return { formData, slotChosen, onSubmit };
};

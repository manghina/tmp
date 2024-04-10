import { useMemo } from "react";
import { Animated, Dimensions } from "react-native";
import { useFormContext, useWatch } from "react-hook-form";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";
import { ProfessionalOffersFormData } from "@app/screens/UserChooseProfessionalOffer/index.hooks";
import { styles } from "./styles";

const { width } = Dimensions.get("screen");

const itemsOffset = -styles.cardContainer.paddingHorizontal * 0.35;

export const useProfessionalOfferCarouselItem = (
  index: number,
  scrollX: Animated.Value,
  professionalOffer: IProfessionalOffer,
) => {
  const { control, setValue } = useFormContext<ProfessionalOffersFormData>();

  const [chosenSlotId, chosenProfessionalOfferId] = useWatch({
    control,
    name: ["slotId", "professionalOfferId"],
  });

  const inputRange = useMemo(
    () => [(index - 1) * width, index * width, (index + 1) * width],
    [index, width],
  );

  const professionalOfferSelected = useMemo(
    () => professionalOffer._id === chosenProfessionalOfferId,
    [professionalOffer._id, chosenProfessionalOfferId],
  );

  const onSlotChosenCallbacks = useMemo(
    () =>
      (professionalOffer?.slots ?? []).map((slot) => () => {
        setValue("slotId", slot._id!, {
          shouldDirty: true,
          shouldTouch: true,
        });
        setValue("professionalOfferId", professionalOffer._id, {
          shouldDirty: true,
          shouldTouch: true,
        });
      }),
    [professionalOffer, setValue],
  );

  const left = scrollX.interpolate({
    inputRange,
    outputRange: [
      -styles.cardContainer.paddingHorizontal * 2.25 + itemsOffset,
      itemsOffset,
      styles.cardContainer.paddingHorizontal * 2.25 + itemsOffset,
    ],
    extrapolate: "clamp",
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.85, 1, 0.85],
    extrapolate: "clamp",
  });

  return {
    left,
    scale,
    chosenSlotId,
    professionalOfferSelected,
    onSlotChosenCallbacks,
  };
};

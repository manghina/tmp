import { useMemo } from "react";
import { Animated, Dimensions } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

const { width } = Dimensions.get("screen");

export const useProfessionalOfferCarouselItem = (
  index: number,
  scrollX: Animated.Value,
) => {
  const inputRange = useMemo(
    () => [(index - 1) * width, index * width, (index + 1) * width],
    [index, width],
  );

  const left = scrollX.interpolate({
    inputRange,
    outputRange: [
      -dimensionsTokens.paddingMd * 1.6,
      0,
      dimensionsTokens.paddingMd * 1.6,
    ],
    extrapolate: "clamp",
  });

  return { left };
};

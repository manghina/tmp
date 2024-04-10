import { useCallback, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useProfessionalOffersCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const professionalOffers = useSelector(
    selectors.getCurrentRequestProfessionalOffers,
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      })(event);
    },
    [],
  );

  return { scrollX, onScroll, professionalOffers };
};

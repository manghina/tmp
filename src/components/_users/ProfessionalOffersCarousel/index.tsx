import { memo } from "react";
import { Animated, Dimensions } from "react-native";
import { useProfessionalOffersCarousel } from "./index.hooks";
import { View } from "react-native-ui-lib";
import { FlashList } from "@shopify/flash-list";
import { ProfessionalOfferCarouselItem } from "@app/components/_users/ProfessionalOfferCarouselItem";

type ProfessionalOffersCarouselProps = {};

const { width } = Dimensions.get("screen");

export const ProfessionalOffersCarousel = memo(
  ({}: ProfessionalOffersCarouselProps) => {
    const { scrollX, onScroll, professionalOffers } =
      useProfessionalOffersCarousel();

    return (
      <View style={{}}>
        {professionalOffers.length > 0 && (
          <FlashList
            horizontal
            pagingEnabled
            data={professionalOffers}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            estimatedItemSize={width}
            keyExtractor={(item) => item._id}
            onScroll={onScroll}
            renderItem={({ item, index }) => (
              <ProfessionalOfferCarouselItem
                professionalOffer={item}
                scrollX={scrollX}
                index={index}
              />
            )}
          />
        )}
      </View>
    );
  },
);

ProfessionalOffersCarousel.displayName = "ProfessionalOffersCarousel";

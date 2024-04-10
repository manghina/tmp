import { memo } from "react";
import { FlatList } from "react-native";
import { View } from "react-native-ui-lib";
import { useProfessionalOffersCarousel } from "./index.hooks";
import { ProfessionalOfferCarouselItem } from "@app/components/_users/ProfessionalOfferCarouselItem";

type ProfessionalOffersCarouselProps = {};

export const ProfessionalOffersCarousel = memo(
  ({}: ProfessionalOffersCarouselProps) => {
    const { scrollX, onScroll, professionalOffers } =
      useProfessionalOffersCarousel();

    return (
      <View>
        {professionalOffers.length > 0 && (
          <FlatList
            horizontal
            pagingEnabled
            data={professionalOffers}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
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

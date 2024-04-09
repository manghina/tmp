import { memo, useMemo } from "react";
import { useProfessionalOfferCarouselItem } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";
import { styles } from "./styles";
import { Animated, Dimensions } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

type ProfessionalOfferCarouselItemProps = {
  professionalOffer: IProfessionalOffer;
  scrollX: Animated.Value;
  index: number;
};

export const ProfessionalOfferCarouselItem = memo(
  ({
    professionalOffer,
    scrollX,
    index,
  }: ProfessionalOfferCarouselItemProps) => {
    const { left } = useProfessionalOfferCarouselItem(index, scrollX);

    const renderDoctorGeneralities = () => (
      <View style={styles.doctorGeneralitiesContainer}>
        <View style={styles.doctorAvatar}></View>
        <View style={styles.doctorInfoContainer}>
          <Text style={styles.doctorNameText}>
            Dott. {professionalOffer.professional.name}{" "}
            {professionalOffer.professional.lastName[0].toUpperCase()}.
          </Text>
          <Text style={styles.doctorSpecializationText}>
            Specialità:{" "}
            {professionalOffer.professional?.specializations[0] ?? "xxxxxxxxx"}
          </Text>
          <Text style={styles.doctorDistanceText}>a 10 min da te</Text>
        </View>
      </View>
    );

    return (
      <Animated.View
        style={[
          styles.cardContainer,
          {
            left,
          },
        ]}
      >
        <View style={[styles.card]}>{renderDoctorGeneralities()}</View>
      </Animated.View>
    );
  },
);

ProfessionalOfferCarouselItem.displayName = "ProfessionalOfferCarouselItem";

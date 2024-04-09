import { memo } from "react";
import { Animated } from "react-native";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import moment from "moment";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";
import { useProfessionalOfferCarouselItem } from "./index.hooks";
import { styles } from "./styles";

type ProfessionalOfferCarouselItemProps = {
  professionalOffer: IProfessionalOffer;
  scrollX: Animated.Value;
  index: number;
};

const formatPrice = (price: number): string =>
  `${(price / 100).toFixed(2).replace(".", ",")}€`;

export const ProfessionalOfferCarouselItem = memo(
  ({
    professionalOffer,
    scrollX,
    index,
  }: ProfessionalOfferCarouselItemProps) => {
    const {
      left,
      scale,
      chosenSlotId,
      professionalOfferSelected,
      onSlotChosenCallbacks,
    } = useProfessionalOfferCarouselItem(index, scrollX, professionalOffer);

    const renderDoctorGeneralities = () => (
      <View style={styles.doctorGeneralitiesContainer}>
        <View style={styles.doctorAvatar}></View>
        <View>
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

    const renderDoctorInfo = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informativa</Text>
        <View style={styles.doctorInfoContainer}>
          <Text style={styles.infoTextTitle}>
            CHI È:{" "}
            <Text style={styles.infoText}>
              Lorem ipsum dolor sit. Id facilisis vestibulum metus. Lorem ipsum
              dolor sit amet consectetur. Id facilisis vestibulum m
            </Text>
          </Text>
          <View style={styles.divider} />
          <Text style={styles.infoTextTitle}>
            PERCHÉ:{" "}
            <Text style={styles.infoText}>
              Lorem ipsum dolor sit amet consec. Id facilisis vestibulum metus.
              Lorm ipsum dolor sit amet consectetur. Id facilisi dhao
            </Text>
          </Text>
        </View>
      </View>
    );

    const renderSlotsOptions = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Disponibilità e onorario</Text>
        <View style={styles.slotsContainer}>
          {(professionalOffer?.slots ?? []).map((slot, index) => {
            const slotSelected =
              professionalOfferSelected && slot._id === chosenSlotId;
            const slotDay = moment(slot.startDate);
            const weekDayAbbr = slotDay.format("dddd").substring(0, 3);
            const isToday =
              slotDay.format("DD/MM/YYYY") === moment().format("DD/MM/YYYY");

            return (
              <TouchableOpacity onPress={onSlotChosenCallbacks[index]}>
                <View
                  key={slot._id}
                  style={[styles.slot, slotSelected && styles.slotSelected]}
                >
                  <View style={styles.slotFirstColumn}>
                    <View
                      style={[
                        styles.radio,
                        slotSelected && styles.slotSelected,
                      ]}
                    >
                      <View
                        style={[
                          styles.radioInner,
                          slotSelected && styles.radioInnerSelected,
                        ]}
                      />
                    </View>
                    <View>
                      <Text style={styles.slotDayText}>
                        {weekDayAbbr[0].toUpperCase()}
                        {weekDayAbbr.substring(1)} {slotDay.format("DD.MM.YY")}
                        {isToday && (
                          <Text style={styles.slotTodayText}> (oggi)</Text>
                        )}
                      </Text>
                      <Text style={styles.slotTimeText}>
                        {slotDay.format("HH:mm")}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.slotSecondColumn}>
                    <Text style={styles.slotPriceText}>
                      {formatPrice(slot.price)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );

    return (
      <Animated.View
        style={[
          styles.cardContainer,
          {
            left,
            transform: [{ scale }],
          },
        ]}
      >
        <View
          style={[
            styles.card,
            professionalOfferSelected && styles.cardSelected,
          ]}
        >
          {renderDoctorGeneralities()}
          {renderDoctorInfo()}
          {renderSlotsOptions()}
        </View>
      </Animated.View>
    );
  },
);

ProfessionalOfferCarouselItem.displayName = "ProfessionalOfferCarouselItem";

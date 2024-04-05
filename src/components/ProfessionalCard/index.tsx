import React, { FC, memo } from "react";
import { View, Text, Colors, Image } from "react-native-ui-lib";
import { FormSlotSelector } from "../_form/FormSlotSelector";
import { styles } from "./styles";
import { colorTokens } from "../../theme/colors/tokens";

type ProfessionalCardProps = {
  focused: boolean;
  profilePicture: string;
  name: string;
  specialty: string;
  distance: string;
  information: string;
  availability: Array<availability>;
};

type availability = {
  dateTime: Date;
  cost: number;
};

export const ProfessionalCard: FC<ProfessionalCardProps> = memo(
  ({
    focused,
    profilePicture,
    name,
    specialty,
    availability,
    information,
    distance,
  }: ProfessionalCardProps) => {
    return (
      <View style={[styles.card, focused ? styles.cardFocused : null]}>
        <View row>
          <Image
            marginR-10
            style={{ borderRadius: 50 }}
            width={48.6}
            height={48.6}
            source={{
              uri: profilePicture,
            }}
          />
          <View>
            <Text style={styles.professionalName}>Dott. {name}</Text>
            <Text link style={styles.speciality}>
              Specialità: {specialty}
            </Text>
            <Text link style={styles.distance}>
              {" "}
              a {distance} da te
            </Text>
          </View>
        </View>
        <Text marginV-10 style={styles.sectionTitle}>
          Informativa
        </Text>
        <View
          width={"100%"}
          padding-20
          backgroundColor={colorTokens.colorBackgroundAccentGraySubtlest}
          style={{ borderRadius: 10.8 }}
        >
          <Text style={styles.informativeContent}>{information}</Text>
          <Text link marginT-8 style={styles.moreInformations}>
            Ulteriori dettagli
          </Text>
        </View>
        <Text marginT-10 marginB-10 style={styles.sectionTitle}>
          Disponibilità e onorario
        </Text>
        <FormSlotSelector availabilityList={availability} />
      </View>
    );
  },
);

ProfessionalCard.displayName = "ProfessionalCard";

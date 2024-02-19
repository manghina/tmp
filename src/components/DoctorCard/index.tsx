import React, { FC, memo } from "react";
import { View, Text, Colors, Image } from "react-native-ui-lib";
import { FormSlotSelector } from "../_form/FormSlotSelector";
import { styles } from "./styles";

type DoctorCardProps = {
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

export const DoctorCard: FC<DoctorCardProps> = memo(
  ({
    profilePicture,
    name,
    specialty,
    availability,
    information,
    distance,
  }: DoctorCardProps) => {
    return (
      <View
        width={315}
        padding-10
        backgroundColor={Colors.whiteBackground}
        style={{ borderRadius: 14.4 }}
      >
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
            <Text link style={styles.distance}> a {distance} da te</Text>
          </View>
        </View>
        <Text marginV-10 style={styles.sectionTitle}>Informativa</Text>
        <View
          width={"100%"}
          padding-20
          backgroundColor={Colors.cardGray}
          style={{ borderRadius: 10.8 }}
        >
          <Text style={styles.informativeContent}>{information}</Text>
          <Text link marginT-8 style={styles.moreInformations}>
            Ulteriori dettagli
          </Text>
        </View>
        <Text marginT-10 marginB-10 style={styles.sectionTitle}>
          Seleziona disponibilità
        </Text>
        <FormSlotSelector availabilityList={availability} />
        <Text marginT-10 style={styles.sectionTitle}>Richiesta del professionista</Text>
        <View
          row
          width={"100%"}
          padding-14
          marginV-10
          backgroundColor={Colors.cardGray}
          style={{
            borderRadius: 10.8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.discount}>Subito un acconto del 20% dell’onorario a titolo di conferma. Saldo a fine seduta.</Text>
        </View>
      </View>
    );
  },
);

DoctorCard.displayName = "DoctorCard";

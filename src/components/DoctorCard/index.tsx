import React, { FC, memo } from "react";
import { View, Text, Colors, Image } from "react-native-ui-lib";
import { FormSlotSelector } from "../_form/FormSlotSelector";
import { styles } from "./styles";

type DoctorCardProps = {
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

export const DoctorCard: FC<DoctorCardProps> = memo(
  ({
    focused,
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
        style={{ borderWidth: 2, borderRadius: 16, borderColor: focused ? "#388BFF" : "#091E4225", shadowColor: "#000", shadowOpacity: focused? 0.12 : 0,
          elevation: focused? 5 : 0}}
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
          Disponibilità e onorario
        </Text>
        <FormSlotSelector availabilityList={availability} />
      </View>
    );
  },
);

DoctorCard.displayName = "DoctorCard";

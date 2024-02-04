import React, { FC, memo } from "react";
import { View, Text, Colors, Image } from "react-native-ui-lib";

type DoctorCardProps = {
  profilePicture: string;
  name: string;
  specialty: string;
  distance: string;
  information: string;
  availability: Array<availability>;
  visitCost: number;
};

type availability = {
  dateTime: Date;
  bonusCost: number;
};

export const DoctorCard: FC<DoctorCardProps> = memo(
  ({
    profilePicture,
    name,
    specialty,
    availability,
    visitCost,
    information,
    distance,
  }: DoctorCardProps) => {
    return (
      <View
        width={315}
        padding-20
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
            <Text style={{ fontWeight: "bold" }}>Dott. {name}</Text>
            <Text link style={{ fontStyle: "italic" }}>
              Specialità: {specialty}
            </Text>
            <Text link> a {distance} da te</Text>
          </View>
        </View>
        <Text marginV-10>Informativa</Text>
        <View
          width={"100%"}
          padding-20
          backgroundColor={Colors.cardGray}
          style={{ borderRadius: 10.8 }}
        >
          <Text style={{ fontStyle: "italic" }}>{information}</Text>
          <Text link marginT-8>
            Ulteriori informazioni
          </Text>
        </View>
        <Text marginT-10>Seleziona disponibilità</Text>
        <View row={false}>
          {availability.map((item, index) => (
            <View
              row
              key={index}
              width={"100%"}
              backgroundColor={Colors.cardGray}
              style={{ borderRadius: 10.8 }}
              marginR-10
              center
            >
              <Text>{item.dateTime.toDateString()}</Text>
              <Text>+{item.bonusCost}€</Text>
            </View>
          ))}
        </View>
        <Text marginT-10>Richiesta del professionista</Text>
        <View
          row
          width={"100%"}
          padding-20
          marginV-10
          backgroundColor={Colors.cardGray}
          style={{ borderRadius: 10.8 }}
        >
          <Text>Onorario visita</Text>
          <View
            padding-10
            backgroundColor={"#E5E6E6"}
            style={{ borderRadius: 50 }}
          >
            <Text style={{ fontWeight: "bold" }}>{visitCost}€</Text>
          </View>
        </View>
      </View>
    );
  },
);

DoctorCard.displayName = "DoctorCard";

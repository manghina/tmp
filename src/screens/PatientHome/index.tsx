import React, { memo } from "react";
import { usePatientHomeScreen } from "./index.hooks";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";

export const PatientHomeScreen = memo(() => {
  const { me } = usePatientHomeScreen();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        padding-20
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 10,
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text Title style={{ fontWeight: "900" }}>
            Ciao {me?.name},
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
            metus.
          </Text>
          <Text>TODO: Aggiungi qui lista prenotazioni</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Text center>Lancia una nuova ricerca</Text>
          <Button label="Sweep Now" />
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <Text center>Bisogno di supporto?</Text>
            <Button link>
              <Text color="#3C77E8" style={{ fontStyle: "italic" }}>
                Guarda i tutorial
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

PatientHomeScreen.displayName = "PatientHomeScreen";

import React, { memo } from "react";
import { usePatientHomeScreen } from "./index.hooks";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";
import { patientHomeStyles } from "./styles";

const HomeGraphics = memo(() => {
  return (
    <View style={patientHomeStyles.graphicsMainContainer}>
      <View style={patientHomeStyles.graphicsRelativeContainer}>
        <View style={patientHomeStyles.graphicsRightBlob} />
        <View style={patientHomeStyles.graphicsLeftBlob} />
        <View style={patientHomeStyles.graphicsSweepCircle3} />
        <View style={patientHomeStyles.graphicsSweepCircle2} />
        <View style={patientHomeStyles.graphicsSweepCircle1} />
        <View style={patientHomeStyles.graphicsSweepCircle0} />
        <SweepSvg />
      </View>
    </View>
  );
});

export const PatientHomeScreen = memo(() => {
  const { me } = usePatientHomeScreen();

  return (
    <SafeAreaView style={patientHomeStyles.safeAreaView}>
      <HomeGraphics />
      <View padding-20 style={patientHomeStyles.mainViewContainer}>
        <View style={patientHomeStyles.greetingsContainer}>
          <Text Title style={patientHomeStyles.greetingsTitle}>
            Ciao {me?.name},
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
            metus.
          </Text>
        </View>
        <View style={patientHomeStyles.bottomActionsContainer}>
          <Text center>Lancia una nuova ricerca</Text>
          <Button label="Sweep Now" />
          <View marginT-20 style={patientHomeStyles.secondaryActionsContainer}>
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

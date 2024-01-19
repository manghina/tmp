import React, { memo } from "react";
import { usePatientHomeScreen } from "./index.hooks";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";
import { patientHomeStyles } from "./styles";
import { PatientAppointmentsList } from "@app/components/patients/PatientAppointmentsList";

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
  const { me, appointmentsList } = usePatientHomeScreen();

  return (
    <>
      <SafeAreaView style={patientHomeStyles.safeAreaView}>
        {appointmentsList.length === 0 ? <HomeGraphics /> : <></>}
        <ScrollView>
          <View
            padding-20
            paddingB-90
            style={patientHomeStyles.mainViewContainer}
          >
            <View style={patientHomeStyles.greetingsContainer}>
              <Text Title style={patientHomeStyles.greetingsTitle}>
                Ciao {me?.name},
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
                metus.
              </Text>
              <View marginT-20>
                {appointmentsList.length > 0 && <PatientAppointmentsList />}
              </View>
            </View>
            {appointmentsList.length === 0 && (
              <View style={patientHomeStyles.bottomActionsContainer}>
                <Text center>Lancia una nuova ricerca</Text>
                <Button label="Sweep Now" />
                <View
                  marginT-20
                  style={patientHomeStyles.secondaryActionsContainer}
                >
                  <Text center>Bisogno di supporto?</Text>
                  <Button link>
                    <Text color="#3C77E8" style={{ fontStyle: "italic" }}>
                      Guarda i tutorial
                    </Text>
                  </Button>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      {appointmentsList.length > 0 && (
        <View
          paddingB-30
          paddingT-20
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#3C77E8",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View
              style={{
                backgroundColor: "#FFF",
                borderRadius: 100,
                width: 20,
                height: 20,
              }}
            >
              <SweepSvg color="#3C77E8" />
            </View>
            <Text style={{ color: "#FFF", fontWeight: "900" }}>Sweep Now</Text>
          </View>
          <Text
            style={{ color: "#FFF", fontWeight: "400", fontStyle: "italic" }}
          >
            Lancia una nuova ricerca
          </Text>
        </View>
      )}
    </>
  );
});

PatientHomeScreen.displayName = "PatientHomeScreen";

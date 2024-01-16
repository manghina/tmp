import React, { memo } from "react";
import { usePatientHomeScreen } from "./index.hooks";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";

const HomeGraphics = memo(() => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "70%",
            aspectRatio: 1,
            right: "-40%",
            top: "20%",
            backgroundColor: "rgba(221, 222, 222, 0.5)",
          }}
        />
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "70%",
            aspectRatio: 1,
            left: "-40%",
            bottom: "20%",
            backgroundColor: "rgba(221, 222, 222, 0.5)",
          }}
        />
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "100%",
            aspectRatio: 1,
            backgroundColor: "rgba(221, 222, 222, 0.25)",
          }}
        />
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "90%",
            aspectRatio: 1,
            backgroundColor: "rgba(221, 222, 222, 0.50)",
          }}
        />
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "80%",
            aspectRatio: 1,
            backgroundColor: "rgba(221, 222, 222, 0.50)",
          }}
        />
        <View
          style={{
            position: "absolute",
            borderRadius: 1000,
            width: "70%",
            aspectRatio: 1,
            backgroundColor: "#DBDCDC",
          }}
        />
        <View
          style={{
            position: "absolute",
          }}
        >
          <SweepSvg />
        </View>
      </View>
    </View>
  );
});

export const PatientHomeScreen = memo(() => {
  const { me } = usePatientHomeScreen();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <HomeGraphics />
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

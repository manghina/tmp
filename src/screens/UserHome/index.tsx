import React, { memo } from "react";
import { useUserHomeScreen } from "./index.hooks";
import { View, Text, Button, TouchableOpacity } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";
import { userHomeStyles } from "./styles";
import { UserRequestsList } from "@app/components/_users/UserRequestsList";

const HomeGraphics = memo(() => {
  return (
    <View style={userHomeStyles.graphicsMainContainer}>
      <View style={userHomeStyles.graphicsRelativeContainer}>
        <View style={userHomeStyles.graphicsRightBlob} />
        <View style={userHomeStyles.graphicsLeftBlob} />
        <View style={userHomeStyles.graphicsSweepCircle3} />
        <View style={userHomeStyles.graphicsSweepCircle2} />
        <View style={userHomeStyles.graphicsSweepCircle1} />
        <View style={userHomeStyles.graphicsSweepCircle0} />
        <SweepSvg />
      </View>
    </View>
  );
});

export const UserHomeScreen = memo(() => {
  const { me, requestsList, onSweepNowButtonPressed } = useUserHomeScreen();

  const renderPageContent = () => (
    <View
      padding-20
      paddingB-90={requestsList.length > 0}
      style={userHomeStyles.mainViewContainer}
    >
      <View style={userHomeStyles.greetingsContainer}>
        <Text h3 style={userHomeStyles.greetingsTitle}>
          Ciao {me?.name},
        </Text>
        <Text>
          {requestsList.length > 2
            ? "Ecco le tue visite!"
            : `Sweep sa che ogni problema di salute è urgente!
            
• Raccontagli il tuo, spiegagli tutto quello che ritieni fondamentale e quando preferiresti ricevere la visita

• Sweep processerà milioni di dati per trovare i medici ideali per risolvere il tuo problema e li contatterà direttamente per sottoporgli il tuo caso

• Nell'arco di un'ora, potrai scegliere tra le proposte di visita dei migliori specialisti

• Comincia a stare meglio!

Lancia una Richiesta facendo tap su Sweep!`}
        </Text>
        <View marginT-20>
          {requestsList.length > 0 && <UserRequestsList />}
        </View>
      </View>
      {requestsList.length === 0 && (
        <View style={userHomeStyles.bottomActionsContainer}>
          <Text center>Lancia una nuova ricerca</Text>
          <Button label="Sweep Now" onPress={onSweepNowButtonPressed} />
          <View marginT-20 style={userHomeStyles.secondaryActionsContainer}>
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
  );

  return (
    <>
      <SafeAreaView style={userHomeStyles.safeAreaView}>
        {requestsList.length === 0 ? <HomeGraphics /> : <></>}
        {requestsList.length === 0 ? (
          renderPageContent()
        ) : (
          <ScrollView>{renderPageContent()}</ScrollView>
        )}
      </SafeAreaView>
      {requestsList.length > 0 && (
        <TouchableOpacity onPress={onSweepNowButtonPressed}>
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
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
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
              <Text style={{ color: "#FFF", fontWeight: "900" }}>
                Sweep Now
              </Text>
            </View>

            <Text
              style={{ color: "#FFF", fontWeight: "400", fontStyle: "italic" }}
            >
              Lancia una nuova ricerca
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
});

UserHomeScreen.displayName = "UserHomeScreen";

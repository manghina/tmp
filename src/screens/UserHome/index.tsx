import React, { memo } from "react";
import { useUserHomeScreen } from "./index.hooks";
import { View, Text, Button, TouchableOpacity } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import SweepSvg from "@app/components/SweepSvg";
import { styles } from "./styles";
import { UserRequestsList } from "@app/components/_users/UserRequestsList";

const introText = `Sweep sa che ogni problema di salute è urgente!
            
• Raccontagli il tuo, spiegagli tutto quello che ritieni fondamentale e quando preferiresti ricevere la visita

• Sweep processerà milioni di dati per trovare i medici ideali per risolvere il tuo problema e li contatterà direttamente per sottoporgli il tuo caso

• Nell'arco di un'ora, potrai scegliere tra le proposte di visita dei migliori specialisti

• Comincia a stare meglio!

Lancia una Richiesta facendo tap su Sweep!`;

const HomeGraphics = memo(() => {
  return (
    <View style={styles.graphicsMainContainer}>
      <View style={styles.graphicsRelativeContainer}>
        <View style={styles.graphicsRightBlob} />
        <View style={styles.graphicsLeftBlob} />
        <View style={styles.graphicsSweepCircle3} />
        <View style={styles.graphicsSweepCircle2} />
        <View style={styles.graphicsSweepCircle1} />
        <View style={styles.graphicsSweepCircle0} />
        <SweepSvg />
      </View>
    </View>
  );
});

export const UserHomeScreen = () => {
  const { me, requestsList, onSweepButtonPressed } = useUserHomeScreen();

  const renderPageContent = () => (
    <View
      style={[
        styles.mainViewContainer,
        { paddingBottom: requestsList.length > 0 ? 90 : 0 },
      ]}
    >
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsTitle}>Ciao {me?.name},</Text>
        <Text style={styles.pageSubtitleText}>
          {requestsList.length > 2
            ? "Non vediamo l’ora di aiutarti a stare meglio!\nEcco le tue Visite."
            : introText}
        </Text>
        <View marginT-20>
          {requestsList.length > 0 && <UserRequestsList />}
        </View>
      </View>
      {requestsList.length === 0 && (
        <View style={styles.bottomActionsContainer}>
          <Button style={styles.ctaButton} onPress={onSweepButtonPressed}>
            <Text style={styles.ctaText}>SWEEP</Text>
          </Button>
        </View>
      )}
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        {requestsList.length === 0 ? <HomeGraphics /> : <></>}
        {requestsList.length === 0 ? (
          renderPageContent()
        ) : (
          <ScrollView>{renderPageContent()}</ScrollView>
        )}
      </SafeAreaView>
      {requestsList.length > 0 && (
        <TouchableOpacity onPress={onSweepButtonPressed}>
          <View style={styles.floatingBottomContainer}>
            <Text style={styles.sweepText}>SWEEP</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

UserHomeScreen.displayName = "UserHomeScreen";
UserHomeScreen.RouteName = "user-home" as const;

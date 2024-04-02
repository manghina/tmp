import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button, Image, ProgressBar, Text, View } from "react-native-ui-lib";

import {
  ProfessionalOfferDecision,
  useProfessionalOfferDetailScreen,
} from "./index.hooks";
import { styles } from "./styles";
import { RequestProfessionalAcceptanceForm } from "@app/components/_professionals/RequestProfessionalAcceptanceForm";

export const ProfessionalOfferDetailScreen = () => {
  const {
    isFetchingProfessionalOffer,
    currentProfessionalOffer,
    onAcceptRequestPressed,
    onRejectRequestPressed,
    onCallERPressed,
    decision,
  } = useProfessionalOfferDetailScreen();

  if (isFetchingProfessionalOffer) {
    return (
      <SafeAreaView>
        <ProgressBar />
      </SafeAreaView>
    );
  }

  const renderMainActions = () => (
    <View style={styles.actionsContainer}>
      <Text style={styles.pText}>Cosa intende fare?</Text>
      <Button
        labelStyle={styles.actionLabel}
        style={styles.buttonGray}
        label="Accetta richiesta"
        onPress={onAcceptRequestPressed}
      />
      <Button
        labelStyle={styles.actionLabel}
        style={styles.buttonGray}
        label="Rifiuta la prestazione"
        onPress={onRejectRequestPressed}
      />
      <Button
        labelStyle={[styles.actionLabel, styles.rejectActionLabel]}
        style={styles.buttonRed}
        label="Riferisci al pronto soccorso"
        onPress={onCallERPressed}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View>
            <Text style={styles.pageTitleText}>Richiesta di visita</Text>
            <Text style={styles.pageSubtitleText}>
              Sweep ha individuato Lei come miglior medico per questo paziente!
            </Text>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.patientContainer}>
              <Text style={styles.sectionName}>Paziente</Text>
              <View style={styles.patientCardContainer}>
                <View row>
                  <Image
                    style={styles.profilePic}
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    }}
                  />
                  <View>
                    <Text style={styles.patientName}>
                      {currentProfessionalOffer!.request.user.name}{" "}
                      {currentProfessionalOffer!.request.user.lastName.charAt(
                        0,
                      )}
                      .
                    </Text>
                    <Text style={styles.patientAge}>24 anni</Text>
                    <Text style={styles.patientIllness}>
                      Presunto mal di testa
                    </Text>
                  </View>
                </View>
                <View style={styles.requestSummaryContainer}>
                  <Text style={styles.sectionName}>Riassunto richiesta</Text>
                  <View style={styles.requestContainer}>
                    <Text style={styles.requestSummaryText}>
                      “ Lorem ipsum dolor sit amet consectetur. Id facilisis
                      vestibulum metus. Lorem ipsum dolor sit amet consectetur.
                      Id facilisis vestibulum metus. Lorem ipsum dolor sit amet
                      consectetur. Id facilisis vestibulum metus. Lorem ipsum
                      dolor sit amet consec. Id facilisis vestibulum metus.
                      Lorem ipsum dolor sit amet ”
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {decision === ProfessionalOfferDecision.NONE && renderMainActions()}
            {decision === ProfessionalOfferDecision.ACCEPT && (
              <RequestProfessionalAcceptanceForm />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

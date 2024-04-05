import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button, Image, ProgressBar, Text, View } from "react-native-ui-lib";

import {
  ProfessionalOfferDecision,
  useProfessionalOfferDetailScreen,
} from "./index.hooks";
import { styles } from "./styles";
import { RequestProfessionalAcceptanceForm } from "@app/components/_professionals/RequestProfessionalAcceptanceForm";
import { ProfessionalOfferStatus } from "@app/models/ProfessionalOffer";
import moment from "moment";
import { colorTokens } from "@app/theme/colors/tokens";
import ThumbsUpIcon from "@app/components/SvgIcons/ThumbsUpIcon";
import ClockIcon from "@app/components/SvgIcons/ClockIcon";

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
    <View style={[styles.section, styles.actionsContainer]}>
      <Text style={styles.actionsDescription}>Cosa intende fare?</Text>
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

  const renderStatusContainer = () => {
    switch (currentProfessionalOffer?.status) {
      case ProfessionalOfferStatus.readyToBeAccepted:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusIconContainer,
                  styles.readyToBeAcceptedIconContainer,
                ]}
              >
                <ClockIcon color={colorTokens.colorIconWarning} />
              </View>
              <View style={styles.statusTitleContainer}>
                <Text style={styles.statusTitle}>In attesa di conferma</Text>
                <Text style={styles.statusSubtitle}>
                  La richiesta scade {moment().add(1, "day").from(moment())}
                </Text>
              </View>
            </View>
          </View>
        );
      case ProfessionalOfferStatus.Accepted:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.acceptedIconContainer,
                  styles.readyToBeAcceptedIconContainer,
                ]}
              >
                <ThumbsUpIcon color={colorTokens.colorIconSuccess} />
              </View>
              <Text style={styles.statusTitle}>Confermata dal paziente</Text>
            </View>
          </View>
        );
      case ProfessionalOfferStatus.Refused:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.rejectedIconContainer,
                  styles.readyToBeAcceptedIconContainer,
                ]}
              >
                <Text>ICON</Text>
              </View>
              <Text style={styles.statusTitle}>Rifiutata</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View style={[styles.section]}>
            <Text style={styles.pageTitleText}>Richiesta di visita</Text>
            <Text style={styles.pageSubtitleText}>
              Sweep ha individuato Lei come miglior medico per questo paziente!
            </Text>
          </View>
          <View style={[styles.contentWrapper]}>
            {[
              ProfessionalOfferStatus.readyToBeAccepted,
              ProfessionalOfferStatus.Accepted,
              ProfessionalOfferStatus.Refused,
            ].includes(currentProfessionalOffer?.status!) &&
              renderStatusContainer()}
            <View style={[styles.section, styles.patientContainer]}>
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
            {currentProfessionalOffer?.status ===
              ProfessionalOfferStatus.Pending && (
              <>
                {decision === ProfessionalOfferDecision.NONE &&
                  renderMainActions()}
                {decision === ProfessionalOfferDecision.ACCEPT && (
                  <RequestProfessionalAcceptanceForm />
                )}
              </>
            )}
            {currentProfessionalOffer?.status ===
              ProfessionalOfferStatus.readyToBeAccepted && (
              <>
                <View style={[styles.section]}>
                  <Text style={styles.sectionName}>Orari proposti</Text>
                  <View style={styles.proposedSlotsContainer}>
                    {(currentProfessionalOffer?.slots ?? []).map(
                      (slot, index) => {
                        const dayString = moment(slot.startDate).format("dddd");

                        return (
                          <>
                            {index !== 0 && <View style={styles.divider} />}
                            <View key={slot._id} style={styles.slotContainer}>
                              <Text style={styles.optionCounterText}>
                                Opzione {index + 1}
                              </Text>
                              <View style={styles.optionDetailsContainer}>
                                <View>
                                  <Text style={styles.pText}>
                                    {moment(slot.startDate).format(
                                      "DD MMMM YYYY",
                                    )}
                                  </Text>
                                  <Text style={styles.optionDayAndTimeText}>
                                    {dayString.charAt(0).toUpperCase()}
                                    {dayString.substring(1)} ore{" "}
                                    {moment(slot.startDate).format("HH:mm")}
                                  </Text>
                                </View>
                                <Text style={styles.optionPrice}>
                                  {(slot.price / 100)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                  €
                                </Text>
                              </View>
                            </View>
                          </>
                        );
                      },
                    )}
                  </View>
                </View>
                <View style={[styles.section, styles.actionsContainer]}>
                  <Text style={styles.actionsDescription}>
                    Azioni al momento disponibili
                  </Text>
                  <Button style={styles.dangerButton}>
                    <Text style={styles.dangerButtonText}>
                      Annulla appuntamento
                    </Text>
                  </Button>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

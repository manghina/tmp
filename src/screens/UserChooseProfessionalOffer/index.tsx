import { memo } from "react";
import { useUserChooseProfessionalOfferScreen } from "./index.hooks";
import { ProgressBar, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { ActivityIndicator, SafeAreaView, ScrollView } from "react-native";
import { bottomInfoHeight, bottomInteractionHeight, styles } from "./styles";
import { colorTokens } from "@app/theme/colors/tokens";
import InfoIcon from "@app/components/SvgIcons/InfoIcon";
import { ProfessionalOffersCarousel } from "@app/components/_users/ProfessionalOffersCarousel";
import { FormProvider } from "react-hook-form";

type UserChooseProfessionalOfferScreenProps = {};

export const UserChooseProfessionalOfferScreen = memo(
  ({}: UserChooseProfessionalOfferScreenProps) => {
    const { formData, isFetchingProfessionalOffers, slotChosen, onSubmit } =
      useUserChooseProfessionalOfferScreen();

    const renderHowDoesItWork = () => (
      <View
        style={[
          styles.absoluteBottom,
          styles.howDoesItWork,
          styles.contentWrapper,
        ]}
      >
        <View style={styles.howDoesItWorkContainer}>
          <View style={styles.howDoesItWorkFirstColumn}>
            <InfoIcon color={colorTokens.colorIconAccentBlue} />
          </View>
          <View style={styles.howDoesItWorkSecondColumn}>
            <Text style={styles.howDoesItWorkTitle}>Come funziona?</Text>
            <Text style={styles.howDoesItWorkSubtitle}>
              Scegli e conferma con il 20%. Salda il resto a fine visita
              direttamente al medico!
            </Text>
          </View>
        </View>
      </View>
    );

    const renderSubmitButton = () => (
      <TouchableOpacity
        onPress={onSubmit}
        style={[
          styles.absoluteBottom,
          styles.contentWrapper,
          styles.submitContainer,
        ]}
      >
        <Text style={styles.submitText}>Conferma appuntamento</Text>
      </TouchableOpacity>
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.contentWrapper}>
              <Text style={styles.pageTitle}>Prenotazione</Text>
              <Text style={styles.pageDescription}>
                Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
                metus.
              </Text>
            </View>
            {isFetchingProfessionalOffers ? (
              <View style={styles.activityContainer}>
                <ActivityIndicator />
              </View>
            ) : (
              <FormProvider {...formData}>
                <ProfessionalOffersCarousel />
              </FormProvider>
            )}
          </View>
          <View
            style={{
              height: slotChosen ? bottomInteractionHeight : bottomInfoHeight,
            }}
          />
        </ScrollView>
        {slotChosen ? renderSubmitButton() : renderHowDoesItWork()}
      </SafeAreaView>
    );
  },
);

UserChooseProfessionalOfferScreen.displayName =
  "UserChooseProfessionalOfferScreen";

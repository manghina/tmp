import { memo } from "react";
import { useUserChooseProfessionalOfferScreen } from "./index.hooks";
import { Text, View } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import InfoIcon from "@app/components/SvgIcons/InfoIcon";
import { colorTokens } from "../../theme/colors/tokens";

type UserChooseProfessionalOfferScreenProps = {};

export const UserChooseProfessionalOfferScreen = memo(
  ({}: UserChooseProfessionalOfferScreenProps) => {
    const {} = useUserChooseProfessionalOfferScreen();

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.fullHeight}>
          <View style={styles.mainContainer}>
            <View style={styles.contentWrapper}>
              <Text style={styles.pageTitle}>Prenotazione</Text>
              <Text style={styles.pageDescription}>
                Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
                metus.
              </Text>
            </View>
            <View style={styles.contentWrapper}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

UserChooseProfessionalOfferScreen.displayName =
  "UserChooseProfessionalOfferScreen";

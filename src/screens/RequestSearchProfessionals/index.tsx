import { memo } from "react";
import { useRequestSearchProfessionalsScreen } from "./index.hooks";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { ProfessionalSearchCarousel } from "@app/components/_users/ProfessionalResearchCarousel";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";

type RequestSearchProfessionalsScreenProps = {};

export const RequestSearchProfessionalsScreen = memo(
  ({}: RequestSearchProfessionalsScreenProps) => {
    const { onBackButtonPress, pageDescription } =
      useRequestSearchProfessionalsScreen();

    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.contentWrapper}>
            <Text style={styles.pageTitle}>Prenotazione</Text>
            <Text style={styles.pageDescription}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
          <ProfessionalSearchCarousel />
          <View style={[styles.contentWrapper, styles.descriptionContainer]}>
            <Text style={styles.sectionTitle}>Ricerca in corso</Text>
            <Text style={styles.sectionSubtitle}>{pageDescription}</Text>
          </View>
          <View style={[styles.contentWrapper, styles.actionsContainer]}>
            <TouchableOpacity onPress={onBackButtonPress}>
              <Text style={styles.backButtonText}>Torna indietro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  },
);

RequestSearchProfessionalsScreen.displayName =
  "RequestSearchProfessionalsScreen";

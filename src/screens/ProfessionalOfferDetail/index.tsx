import { useProfessionalOfferDetailScreen } from "./index.hooks";
import { styles } from "./styles";
import { View, Text, Button, Colors, Image } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import React from "react";
import { colorTokens } from "../../theme/colors/tokens";

export const ProfessionalOfferDetailScreen = () => {
  //const {} = useProfessionalOfferDetailScreen();

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Text style={styles.pageTitleText}>Richiesta di visita</Text>
      <Text style={styles.pSubtleText}>
        Sweep ha individuato Lei come miglior medico per questo paziente!
      </Text>
      <View style={styles.patientPageContainer}>
        <Text style={styles.pSubtleText}>Paziente</Text>
        <View style={styles.patientCardContainer}>
          <View row>
            <Image
              style={styles.profilePic}
              source={{
                uri: " ",
              }}
            />
            <View>
              <Text style={styles.patientName}>Elisa G.</Text>
              <Text style={styles.patientAge}>24 anni</Text>
              <Text style={styles.patientIllness}>Presunto mal di testa</Text>
            </View>
          </View>
          <View style={styles.requestPageContainer}>
            <Text style={styles.pSubtleText}>Riassunto richiesta</Text>
            <View style={styles.requestContainer}>
              <Text style={styles.requestText}>
                Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
                metus. Lorem ipsum dolor sit amet consectetur. Id facilisis
                vestibulum metus. Lorem ipsum dolor sit amet consectetur. Id
                facilisis vestibulum metus. Lorem ipsum dolor sit amet consec.
                Id facilisis vestibulum metus. Lorem ipsum dolor sit amet
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ButtonsSection}>
        <Text style={styles.pText}>Cosa intende fare?</Text>
        <Button
          labelStyle={{ color: colorTokens.colorText }}
          style={styles.buttonGray}
          label="Accetta richiesta"
          onPress={() => {}}
        />
        <Button
          labelStyle={{ color: colorTokens.colorText }}
          style={styles.buttonGray}
          label="Rifiuta la prestazione"
          onPress={() => {}}
        />
        <Button
          labelStyle={{ color: colorTokens.colorTextInverse }}
          style={styles.buttonRed}
          label="Riferisci al pronto soccorso"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

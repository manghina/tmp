import { View, Text, Button } from "react-native-ui-lib";
import { useDeleteReservationScreen } from "./index.hooks";
import { styles } from "./styles";
import { SafeAreaView, ScrollView } from "react-native";
import { FormRadioGroup } from "@app/components/_form/FormRadioGroup";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";

export const RequestCancelByUserScreen = () => {
  const { formData, triggerRequestCancel, canSubmit } =
    useDeleteReservationScreen();

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={styles.pageContent}>
          <FormProvider {...formData}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>Cancellazione</Text>
              <Text style={styles.headingSubtitle}>
                Ci spiace molto! Potrebbero essere addebitati dei costi per la
                cancellazione. Sei sicuro?
              </Text>
            </View>
            <View style={styles.motivationsContainer}>
              <View style={styles.motivationHeading}>
                <Text style={styles.motivationTitle}>Motivazioni</Text>
                <Text style={styles.motivationSubtitle}>
                  Lorem ipsum dolor sit amet consectetur. Urna urna sed dui
                  mattis ac ornare adipiscing
                </Text>
              </View>
              <FormRadioGroup
                name="motivation"
                options={[
                  { label: "Problema con orario e/o data", value: "option_a" },
                  { label: "Trovato soluzione alternativa", value: "option_b" },
                ]}
              />
            </View>
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackHeading}>
                <Text style={styles.feedbackTitle}>Title</Text>
                <Text style={styles.feedbackSubtitle}>
                  Spiega a Sweep come mai desideri disdire l'appuntamento.
                </Text>
              </View>
              <FormTextField
                name="feedback"
                placeholder="Scrivi qui..."
                fieldStyle={styles.feedbackFieldContainer}
                multiline={true}
              />
            </View>
            <View style={styles.disclaimerContainer}>
              <Text style={styles.disclaimerTitle}>Disclaimer</Text>
              <Text style={styles.disclaimerText}>
                Il medico ha riservato l'agenda per risolvere il tuo problema e
                il non presentarsi comporta una difficoltà organizzativa.
                Potrebbero esserti addebitati costi per la mancata visita.
              </Text>
            </View>
            <View style={styles.ctaContainer}>
              <Text style={styles.ctaText}>Sicuro di voler procedere?</Text>
              <Button
                style={[
                  styles.ctaButton,
                  !canSubmit ? styles.ctaButtonDisabled : undefined,
                ]}
                label="Anulla prenotazione"
                onPress={triggerRequestCancel}
                disabled={!canSubmit}
              />
            </View>
          </FormProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

RequestCancelByUserScreen.displayName = "RequestCancelByUserScreen";
RequestCancelByUserScreen.RouteName = "user-request/cancel" as const;

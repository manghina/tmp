import { View, Text, Image, Button } from "react-native-ui-lib";
import { useDeleteReservationScreen } from "./index.hooks";
import { styles } from "./styles";
import { SafeAreaView, ScrollView } from "react-native";
import { FormRadioGroup } from "@app/components/_form/FormRadioGroup";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";

export const DeleteReservationScreen = () => {
  const { formData } = useDeleteReservationScreen();

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView>
        <View style={styles.pageContent}>
          <FormProvider {...formData}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTitle}>Cancellazione</Text>
              <Text style={styles.headingSubtitle}>
                Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
                metus.
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
                name="motivations"
                options={[
                  { label: "Option A", value: "option_a" },
                  { label: "Option B", value: "option_b" },
                ]}
              />
            </View>
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackHeading}>
                <Text style={styles.feedbackTitle}>Title</Text>
                <Text style={styles.feedbackSubtitle}>
                  Lorem ipsum dolor sit amet consectetur. Urna urna sed dui
                  mattis ac ornare adipiscing.
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
                
            </View>
          </FormProvider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

DeleteReservationScreen.displayName = "DeleteReservationScreen";

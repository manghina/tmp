import React, { memo } from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { useLoginBottomSheet } from "./index.hooks";
import { FormTextField } from "@app/components/_form/FormTextField";
import { BottomSheet } from "@app/components/BottomSheet";
import { styles } from "./style";
import { ScrollView } from "react-native";

const headerBackgroundGraphicsPercentageOverflow = 20;

type LoginBottomSheetProps = {
  onRegisterButtonPressed: () => void;
  showLoginBottomSheet: boolean;
  onLoginClose: () => void;
};

export const LoginBottomSheet = memo(
  ({
    onRegisterButtonPressed,
    showLoginBottomSheet,
    onLoginClose,
  }: LoginBottomSheetProps) => {
    const { formData, submitDisabled, onProceedButtonPressed } =
      useLoginBottomSheet({ onLoginClose });

    return (
      <BottomSheet visible={showLoginBottomSheet} onDismiss={onLoginClose}>
        <View
          style={[
            styles.blueRoundedDecoration,
            {
              width: `${100 + headerBackgroundGraphicsPercentageOverflow}%`,
              left: `${-headerBackgroundGraphicsPercentageOverflow / 2}%`,
            },
          ]}
        />
        <View style={styles.pageContentWrapper}>
          <View>
            <Text style={styles.pageTitle}>Accedi</Text>
            <Text style={styles.pageSubtitle}>Seleziona metodo preferito</Text>
          </View>
          <ScrollView automaticallyAdjustKeyboardInsets={true} >
            <FormProvider {...formData}>
              <View style={styles.contentContainer}>
                <FormTextField
                  keyboardType="email-address"
                  name="email"
                  label="Indirizzo email"
                textContentType="emailAddress"/>
                <Button
                  onPress={onProceedButtonPressed}
                  disabled={submitDisabled}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Procedi</Text>
                </Button>
                <View style={styles.secondaryActionContainer}>
                  <Text style={styles.secondaryActionText}>
                    Non hai un profilo?
                  </Text>
                  <Text
                    style={styles.secondaryActionLink}
                    onPress={onRegisterButtonPressed}
                  >
                    Registrati
                  </Text>
                </View>
              </View>
            </FormProvider>
          </ScrollView>
        </View>
      </BottomSheet>
    );
  },
);

LoginBottomSheet.displayName = "LoginBottomSheet";

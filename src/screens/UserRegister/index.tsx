import { View, Text, Button, Colors } from "react-native-ui-lib";
import { useUserRegisterScreen } from "./index.hooks";
import React, { memo } from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";

type UserRegisterScreenProps = {};

export const UserRegisterScreen = memo(({}: UserRegisterScreenProps) => {
  const {
    formData,
    stepperCounter,
    firstStepFilled,
    firstStepCompletionPercentage,
    secondStepFilled,
    secondStepCompletionPercentage,
    canGoToNextStep,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    submitDisabled,
    triggerSubmit,
  } = useUserRegisterScreen();

  return (
    <ScrollView style={styles.pageContainer}>
      <FormProvider {...formData}>
        {stepperCounter == 1 ? (
          <View key="step1" style={styles.step}>
            <AnimatedProgressBar
              value={firstStepCompletionPercentage}
              duration={250}
            />
            <View style={styles.formColumn}>
              <FormTextField name="firstName" label="Nome" />
              <FormTextField name="lastName" label="Cognome" />
              <FormDateTimePicker name="birthDate" label="Data di nascita" />
              <View style={styles.mainActionLabelContainer}>
                <Text
                  grayText={!firstStepFilled}
                  style={styles.mainActionLabelText}
                >
                  Ci sei quasi...
                </Text>
              </View>
              <Button
                BlueButton
                label="Prosegui"
                style={styles.mainAction}
                onPress={onNextStepButtonPressed}
                disabledBackgroundColor={Colors.disabledBlue}
                disabled={!canGoToNextStep}
              />
            </View>
          </View>
        ) : (
          <View key="step2" style={styles.step}>
            <AnimatedProgressBar
              value={secondStepCompletionPercentage}
              duration={250}
            />
            <View style={styles.formColumn}>
              <FormTextField
                keyboardType={"email-address"}
                name="email"
                label="Email"
              />
              <FormTextField name="password" label="Password" type="password" />
              <FormTextField
                name="confirmPassword"
                label="Conferma password"
                type="password"
              />
              <Text
                grayText={!secondStepFilled}
                style={styles.mainActionLabelText}
              >
                Iscrizione completata!
              </Text>
              <Button
                BlueButton
                label="Registrati"
                style={styles.mainAction}
                onPress={triggerSubmit}
                disabledBackgroundColor={Colors.disabledBlue}
                disabled={!secondStepFilled || submitDisabled}
              />
              <Text
                center
                underline
                default14Text
                marginT-16
                onPress={onPreviousStepButtonPressed}
                style={styles.backTextButton}
              >
                Torna indietro
              </Text>
            </View>
          </View>
        )}
      </FormProvider>
    </ScrollView>
  );
});

UserRegisterScreen.displayName = "UserRegisterScreen";

import { View, Text, Button, Colors } from "react-native-ui-lib";
import { useUserRegisterScreen } from "./index.hooks";
import React, { memo } from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";

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
    <FormProvider {...formData}>
      {stepperCounter == 1 ? (
        <View key="step1" height="100%">
          <View
            backgroundColor={Colors.buttonBlue}
            style={{
              width: `${firstStepCompletionPercentage}%`,
              height: 4,
            }}
          />
          <View flex paddingH-20 paddingT-20>
            <FormTextField name="firstName" label="Nome" />
            <FormTextField name="lastName" label="Cognome" />
            <FormDateTimePicker name="birthDate" label="Data di nascita" />
            <Text center grayText={!firstStepFilled} marginT-24>
              Ci sei quasi...
            </Text>
            <Button
              BlueButton
              label="Prosegui"
              marginT-8
              style={{ width: "100%" }}
              onPress={onNextStepButtonPressed}
              disabledBackgroundColor={Colors.disabledBlue}
              disabled={!canGoToNextStep}
            />
          </View>
        </View>
      ) : (
        <View key="step2" height="100%">
          <View
            backgroundColor={Colors.buttonBlue}
            style={{
              width: `${secondStepCompletionPercentage}%`,
              height: 4,
            }}
          ></View>
          <View flex paddingH-20 paddingT-20>
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
            <Text center grayText={!secondStepFilled} marginT-24>
              Iscrizione completata!
            </Text>
            <Button
              BlueButton
              label="Registrati"
              marginT-8
              style={{ width: "100%" }}
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
            >
              Torna indietro
            </Text>
          </View>
        </View>
      )}
    </FormProvider>
  );
});

UserRegisterScreen.displayName = "UserRegisterScreen";
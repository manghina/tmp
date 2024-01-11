import { View, Text, Button, Colors } from "react-native-ui-lib";
import { useRegisterScreen } from "./index.hooks";
import React from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "../../components/_form/FormTextField";
import { FormHiddenTextField } from "@app/components/_form/FormHiddenTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";

export const RegisterScreen = () => {
  const {
    formData,
    stepperCounter,
    setStepperCounter,
    firstStepFilled,
    firstStepCompletionPercentage,
    secondStepFilled,
    secondStepCompletionPercentage,
    canGoToNextStep,
    submitDisabled,
    triggerSubmit,
  } = useRegisterScreen();

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
              onPress={() => {
                setStepperCounter(stepperCounter + 1);
              }}
              disabledBackgroundColor={Colors.disabledBlue}
              disabled={!canGoToNextStep}
            ></Button>
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
            <FormTextField name="email" label="Email" />
            <FormHiddenTextField name="password" label="Password" />
            <FormHiddenTextField
              name="confirmPassword"
              label="Conferma password"
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
              disabled={submitDisabled}
            />
            <Text
              center
              underline
              default14Text
              marginT-16
              onPress={() => setStepperCounter(1)}
            >
              Torna indietro
            </Text>
          </View>
        </View>
      )}
    </FormProvider>
  );
};

import React, { memo } from "react";
import { View, Button, Colors, Text } from "react-native-ui-lib";
import { useForgotPasswordScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormHiddenTextField } from "../../components/_form/FormHiddenTextField";

export const ForgotPasswordScreen = memo(() => {
  const {
    formData,
    triggerRecoveryPasswordTokenSubmit,
    triggerPasswordChangeSubmit,
    step1Filled,
    step2Filled,
    step3Filled,
    completionPercentage,
    stepperCounter,
    clearFields,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    trigger,
  } = useForgotPasswordScreen();

  return (
    <View>
      <View
        backgroundColor={Colors.buttonBlue}
        style={{
          width: `${completionPercentage}%`,
          height: 4,
        }}
      />
      <View paddingH-20 paddingT-20>
        <Text title style={{ fontSize: 30, fontWeight: "900" }}>
          Password dimenticata?
        </Text>
        <Text regular16Text>
          Abbiamo la soluzione e siamo qui per aiutarti a impostarne una tutta
          nuova.
        </Text>
        <FormProvider {...formData}>
          {(() => {
            switch (stepperCounter) {
              case 1:
                return (
                  <View key="step1" height="100%">
                    <FormTextField
                      keyboardType={"email-address"}
                      marginT-24
                      name="email"
                      label="Indirizzo email usato in fase di registrazione"
                    />
                    <Text center grayText={!step1Filled} marginT-24>
                      Ci sei quasi...
                    </Text>
                    <Button
                      marginT-8
                      label="Prosegui"
                      onPress={() => {
                        trigger("email").then(
                          (isEmailValid) =>
                            isEmailValid &&
                            (() => {
                              onNextStepButtonPressed();
                              triggerRecoveryPasswordTokenSubmit();
                            })(),
                        );
                      }}
                      disabled={!step1Filled}
                    />
                  </View>
                );
              case 2:
                return (
                  <View key="step2" height="100%">
                    <FormTextField
                      keyboardType={"number-pad"}
                      maxLength={6}
                      marginT-24
                      name="recoveryPasswordToken"
                      label="Codice di verifica ricevuto via email"
                    />
                    <Text default14 marginT-24>
                      Non hai ricevuto il codice?{" "}
                      <Text
                        link
                        style={{ fontStyle: "italic" }}
                        onPress={triggerRecoveryPasswordTokenSubmit}
                      >
                        Clicca qui
                      </Text>
                    </Text>
                    <Button
                      marginT-8
                      label="Imposta nuova password"
                      onPress={() => {
                        trigger("recoveryPasswordToken").then(
                          (isRecoveryPasswordTokenValid) => {
                            isRecoveryPasswordTokenValid &&
                              onNextStepButtonPressed();
                          },
                        );
                      }}
                      disabled={!step2Filled}
                    />
                    <Text
                      center
                      underline
                      default14Text
                      marginT-16
                      onPress={() => {
                        clearFields();
                        onPreviousStepButtonPressed();
                      }}
                    >
                      Torna indietro
                    </Text>
                  </View>
                );
              case 3:
                return (
                  <View key="step3" height="100%">
                    <FormHiddenTextField
                      marginT-24
                      name="newPassword"
                      label="Crea nuova password"
                    />
                    <FormHiddenTextField
                      marginT-24
                      name="confirmNewPassword"
                      label="Comferma password"
                    />
                    <Text center grayText={!step3Filled} marginT-24>
                      Un ultimo sforzo...
                    </Text>
                    <Button
                      marginT-8
                      label="Conferma"
                      onPress={triggerPasswordChangeSubmit}
                      disabled={!step3Filled}
                    />
                    <Text
                      center
                      underline
                      default14Text
                      marginT-16
                      onPress={() => {
                        clearFields();
                        onPreviousStepButtonPressed();
                      }}
                    >
                      Torna indietro
                    </Text>
                  </View>
                );
            }
            return <></>;
          })()}
        </FormProvider>
      </View>
    </View>
  );
});

ForgotPasswordScreen.displayName = "LoginByMailScreen";

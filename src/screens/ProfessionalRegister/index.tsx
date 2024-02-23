import {
  View,
  Text,
  Button,
  Colors,
  TouchableOpacity,
} from "react-native-ui-lib";
import { useProfessionalregister } from "./index.hooks";
import React from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";

export const ProfessionalRegisterScreen = () => {
  const {
    formData,
    stepperCounter,
    goToCountryChooser,
    firstStepCompletionPercentage,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    step1Filled,
  } = useProfessionalregister();

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
            <Text marginT-8>Numero di cellulare</Text>
            <View row style={{ width: "100%" }}>
              <View style={{ width: "30%" }}>
                <TouchableOpacity onPress={() => goToCountryChooser()}>
                  <FormTextField
                    editable={false}
                    value={"🌐 +"}
                    name="phonePrefix"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: "70%" }}>
                <FormTextField keyboardType={"phone-pad"} name="phoneNumber" />
              </View>
            </View>
            <Text center grayText={!step1Filled} marginT-24>
              Ci sei quasi...
            </Text>
            <Button
              BlueButton
              label="Prosegui"
              marginT-8
              style={{ width: "100%" }}
              onPress={onNextStepButtonPressed}
              disabledBackgroundColor={Colors.disabledBlue}
              //disabled={!canGoToNextStep}
            />
          </View>
        </View>
      ) : (
        <>Step2</> /*
        <View key="step2" height="100%">
          <View
            backgroundColor={Colors.buttonBlue}
            style={{
              width: `${secondStepCompletionPercentage}%`,
              height: 4,
            }}
          ></View>
          <View flex paddingH-20 paddingT-20>
            <FormTextField keyboardType={"email-address"} name="email" label="Email" />
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
      */
      )}
    </FormProvider>
  );
};

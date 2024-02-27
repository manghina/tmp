import {
  View,
  Text,
  Button,
  Colors,
  TouchableOpacity,
} from "react-native-ui-lib";
import { useProfessionalRegister } from "./index.hooks";
import React from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormImagePicker } from "../../components/_form/FormImagePicker";

export const ProfessionalRegisterScreen = () => {
  const {
    formData,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    goToCountryChooser,
    firstStepCompletionPercentage,
    secondStepCompletionPercentage,
    step1Filled,
    step2Filled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
  } = useProfessionalRegister();

  return (
    <FormProvider {...formData}>
      {stepperIndex === 1 ? (
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
        <View key="step2" height="100%">
          <View
            backgroundColor={Colors.buttonBlue}
            style={{
              width: `${secondStepCompletionPercentage}%`,
              height: 4,
            }}
          />
          <View flex paddingH-20 paddingT-10>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: Dimensions.small.spacing_050,
              }}
            >
              <FormImagePicker
                name="professionalPaperPhoto"
                label="Carica foto libretto"
              />
              <FormTextField
                name="professionalRegistrationNumber"
                label="Numero iscrizione albo"
              />
              <FormNewScreenFilterableSelect
                name="province"
                label="Ordine dei medici della provincia di"
                options={provincesOptions}
                pageProps={{
                  pageTitle: "Seleziona sede",
                  pageDescription:
                    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                  searchTextLabel: "Trova provincia",
                  listTitle: "Lista città",
                }}
              />
              <FormNewScreenFilterableSelect
                name="specialization"
                label="Specializzazione"
                options={professionsOptions}
                pageProps={{
                  pageTitle: "Seleziona tipologia",
                  pageDescription:
                    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                  searchTextLabel: "Trova specializzazione",
                  listTitle: "Lista professioni",
                }}
              />
              <FormTextField name="officeLocation" label="Sede dello studio" />
              <Text center grayText={!step2Filled} marginT-24>
                Ci sei quasi...
              </Text>
            </View>
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
};

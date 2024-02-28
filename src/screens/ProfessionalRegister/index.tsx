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
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormImagePicker } from "@app/components/_form/FormImagePicker";
import { textVariants } from "@app/theme/typographies/variants";
import { styles } from "./styles";

export const ProfessionalRegisterScreen = () => {
  const {
    formData,
    submitDisabled,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    goToCountryChooser,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
  } = useProfessionalRegister();

  const renderStep1 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField name="firstName" label="Nome" />
      <FormTextField name="lastName" label="Cognome" />
      <FormDateTimePicker name="birthDate" label="Data di nascita" />
      <View>
        <Text style={{ ...textVariants.p2MediumNormal }}>
          Numero di cellulare
        </Text>
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
      </View>
    </View>
  );
  const renderStep2 = () => (
    <View style={styles.fieldsColumn}>
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
    </View>
  );
  const renderStep3 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField name="email" label="Indirizzo email" />
      <FormTextField name="password" type="password" label="Password" />
      <FormTextField
        name="confirmPassword"
        type="password"
        label="Conferma password"
      />
    </View>
  );

  const renderStepControls = () => {
    const isFirstStep = stepperIndex === 1;
    const isLastStep = stepperIndex === 3;

    return (
      <>
        <View style={styles.stepperControlsContainer}>
          <Text center grayText={!currentStepFilled}>
            {isLastStep ? "Iscrizione completata!" : "Ci sei quasi..."}
          </Text>
          <Button
            style={styles.callToAction}
            label={isLastStep ? "Accedi" : "Prosegui"}
            onPress={
              isLastStep
                ? triggerProfessionalRegisterSubmit
                : onNextStepButtonPressed
            }
            disabledBackgroundColor={Colors.disabledBlue}
            disabled={isLastStep ? submitDisabled : !canGoToNextStep}
          />
        </View>
        {!isFirstStep && (
          <Text center underline onPress={onPreviousStepButtonPressed}>
            Torna indietro
          </Text>
        )}
      </>
    );
  };

  return (
    <FormProvider {...formData}>
      <View
        backgroundColor={Colors.buttonBlue}
        style={{
          width: `${currentStepCompletionPercentage}%`,
          height: 4,
        }}
      />
      <View style={styles.stepContent}>
        {stepperIndex === 1 ? (
          renderStep1()
        ) : stepperIndex === 2 ? (
          renderStep2()
        ) : stepperIndex === 3 ? (
          renderStep3()
        ) : (
          <View />
        )}
        {renderStepControls()}
      </View>
    </FormProvider>
  );
};

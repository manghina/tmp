import { View, Text, Button } from "react-native-ui-lib";
import { useProfessionalRegister } from "./index.hooks";
import React from "react";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormImagePicker } from "@app/components/_form/FormImagePicker";
import { styles } from "./styles";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import { ScrollView } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";

export const ProfessionalRegisterScreen = () => {
  const {
    formData,
    submitDisabled,
    phonePrefixOptions,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
  } = useProfessionalRegister();

  const renderStep1 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField key="name" name="name" label="Nome" />
      <FormTextField key="lastName" name="lastName" label="Cognome" />
      <FormDatePicker
        key="birthDate"
        name="birthDate"
        label="Data di nascita"
      />
      <View>
        <Text style={styles.phoneNumberLabel}>Numero di cellulare</Text>
        <View row style={styles.phoneInputContainer}>
          <View style={styles.phonePrefixContainer}>
            <FormNewScreenFilterableSelect
              key="phonePrefix"
              name="phonePrefix"
              label=""
              options={phonePrefixOptions}
              pageProps={{
                pageTitle: "Seleziona prefisso",
                pageDescription:
                  "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                searchTextLabel: "Trova nazione",
                listTitle: "Lista nazioni",
              }}
              style={styles.phonePrefix}
              disabled={true}
            />
          </View>
          <View style={styles.phoneNumberContainer}>
            <FormTextField
              key="phoneNumber"
              name="phoneNumber"
              keyboardType="phone-pad"
              style={styles.phoneNumber}
            />
          </View>
        </View>
      </View>
    </View>
  );
  const renderStep2 = () => (
    <View style={styles.fieldsColumn}>
      <FormImagePicker
        key="professionalPaperPhoto"
        name="professionalPaperPhoto"
        label="Carica foto libretto"
      />
      <FormTextField
        key="professionalRegistrationNumber"
        name="professionalRegistrationNumber"
        label="Numero iscrizione albo"
      />
      <FormNewScreenFilterableSelect
        key="province"
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
        key="specialization"
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
      <FormTextField
        key="officeLocation"
        name="officeLocation"
        label="Sede dello studio"
      />
    </View>
  );
  const renderStep3 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField key="email" name="email" label="Indirizzo email" />
      <FormTextField
        key="password"
        name="password"
        type="password"
        label="Password"
      />
      <FormTextField
        key="confirmPassword"
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
          <Text
            center
            color={
              !currentStepFilled
                ? colorTokens.colorTextAccentGray
                : colorTokens.colorTextDefault
            }
          >
            Ci sei quasi...
          </Text>
          <Button
            style={styles.callToAction}
            label={isLastStep ? "Registrati" : "Prosegui"}
            onPress={
              isLastStep
                ? triggerProfessionalRegisterSubmit
                : onNextStepButtonPressed
            }
            disabledBackgroundColor={colorTokens.colorBackgroundDisabled}
            disabled={isLastStep ? submitDisabled : !canGoToNextStep && false}
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
    <View style={styles.pageContainer}>
      <FormProvider {...formData}>
        <AnimatedProgressBar
          value={currentStepCompletionPercentage}
          duration={250}
        />
        <ScrollView style={styles.stepContent}>
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
        </ScrollView>
      </FormProvider>
    </View>
  );
};

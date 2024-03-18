import React, { memo } from "react";
import { View, Button, Text } from "react-native-ui-lib";
import { useForgotPasswordScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import { ScrollView } from "react-native";
import { styles } from "./styles";

export const ForgotPasswordScreen = memo(() => {
  const {
    formData,
    triggerPasswordChangeSubmit,
    step1Filled,
    step2Filled,
    step3Filled,
    completionPercentage,
    stepperCounter,
    onFirstStepProceedButtonPressed,
    onSecondStepProceedButtonPressed,
    onBackButtonPressed,
  } = useForgotPasswordScreen();

  const renderStep1 = () => (
    <View key="step1" style={styles.formColumn}>
      <FormTextField
        keyboardType="email-address"
        name="email"
        label="Indirizzo email usato in fase di registrazione"
      />
      <View style={styles.mainActionContainer}>
        <Text
          style={[
            styles.mainActionLabel,
            !step1Filled ? styles.textDisabled : undefined,
          ]}
        >
          Ci sei quasi...
        </Text>
        <Button
          label="Prosegui"
          onPress={onFirstStepProceedButtonPressed}
          disabled={!step1Filled}
        />
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View key="step2" style={styles.formColumn}>
      <FormTextField
        keyboardType="number-pad"
        maxLength={6}
        name="otpCode"
        label="Codice di verifica ricevuto via email"
      />
      {/*recoveryPasswordTokenTimer > 0 ? (
        <Text center grayText marginT-24>
          Inserisci il codice entro 00:
          {recoveryPasswordTokenTimer.toString().padStart(2, "0")}
        </Text>
      ) : (
        <Text center default14 marginT-24>
          Non hai ricevuto il codice?{" "}
          <Text
            link
            style={{ fontStyle: "italic" }}
            onPress={() => {
              triggerRecoveryPasswordTokenSubmit();
              startRecoveryPasswordTokenTimer();
            }}
          >
            Clicca qui
          </Text>
        </Text>
      )*/}
      <Button
        label="Imposta nuova password"
        onPress={onSecondStepProceedButtonPressed}
        disabled={!step2Filled}
      />
      <Text style={styles.backButton} onPress={onBackButtonPressed}>
        Torna indietro
      </Text>
    </View>
  );

  const renderStep3 = () => (
    <View key="step3" style={styles.formColumn}>
      <FormTextField
        name="newPassword"
        label="Crea nuova password"
        type="password"
      />
      <FormTextField
        name="confirmNewPassword"
        label="Comferma password"
        type="password"
      />
      <View style={styles.mainActionContainer}>
        <Text
          style={[
            styles.mainActionLabel,
            styles.subtlest,
            !step3Filled ? styles.textDisabled : undefined,
          ]}
        >
          Un ultimo sforzo...
        </Text>
        <Button
          label="Conferma"
          onPress={triggerPasswordChangeSubmit}
          disabled={!step3Filled}
        />
      </View>
      <Text style={styles.backButton} onPress={onBackButtonPressed}>
        Torna indietro
      </Text>
    </View>
  );

  return (
    <View>
      <AnimatedProgressBar value={completionPercentage} duration={250} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.pageContent}>
          <View>
            <Text style={styles.pageTitle}>Password dimenticata?</Text>
            <Text style={styles.pageSubtitle}>
              Abbiamo la soluzione e siamo qui per aiutarti a impostarne una
              tutta nuova.
            </Text>
          </View>

          <FormProvider {...formData}>
            {stepperCounter === 1 && renderStep1()}
            {stepperCounter === 2 && renderStep2()}
            {stepperCounter === 3 && renderStep3()}
          </FormProvider>
        </View>
      </ScrollView>
    </View>
  );
});

ForgotPasswordScreen.displayName = "LoginByMailScreen";

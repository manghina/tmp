import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { useUserRegisterScreen } from "./index.hooks";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import LottieView from "lottie-react-native";
import { colorTokens } from "@app/theme/colors/tokens";

type UserRegisterScreenProps = {};

export const UserRegisterScreen = ({}: UserRegisterScreenProps) => {
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
    showLoadingAnimation,
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
              <FormDatePicker name="birthDate" label="Data di nascita" />
              <View style={styles.mainActionLabelContainer}>
                <Text
                  color={
                    !firstStepFilled
                      ? colorTokens.colorTextAccentGray
                      : colorTokens.colorTextDefault
                  }
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
                disabledBackgroundColor={colorTokens.colorBackgroundDisabled}
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
                textContentType="emailAddress"
                keyboardType={"email-address"}
                name="email"
                label="Email"
                autoComplete="email"
              />
              <FormTextField 
                textContentType="password"
                autoComplete="password"
                name="password" 
                label="Password" 
                type="password" />
              <FormTextField
                textContentType="password"
                autoComplete="password"
                name="confirmPassword"
                label="Conferma password"
                type="password"
              />
              <Text
                color={
                  !secondStepFilled
                    ? colorTokens.colorTextAccentGray
                    : colorTokens.colorTextDefault
                }
                style={styles.mainActionLabelText}
              >
                Iscrizione completata!
              </Text>
              <Button
                onPress={triggerSubmit}
                disabled={
                  !secondStepFilled || submitDisabled || showLoadingAnimation
                }
                style={styles.button}
              >
                {showLoadingAnimation ? (
                  <LottieView
                    source={require("../../../assets/animations/loading.json")}
                    autoPlay
                    speed={1}
                    loop={true}
                    style={styles.loadingAnimation}
                  />
                ) : (
                  <Text style={styles.buttonText}>Registrati</Text>
                )}
              </Button>
              {/* <Button
                label="Registrati"
                style={styles.mainAction}
                onPress={triggerSubmit}
                disabledBackgroundColor={Colors.disabledBlue}
                disabled={!secondStepFilled || submitDisabled}
              /> */}
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
};

UserRegisterScreen.displayName = "UserRegisterScreen";
UserRegisterScreen.RouteName = "user-register" as const;

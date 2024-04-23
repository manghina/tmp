import React, { memo } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { useLoginScreen } from "./index.hooks";
import { FormTextField } from "@app/components/_form/FormTextField";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import { styles } from "./styles";
import LottieView from "lottie-react-native";

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  const {
    formData,
    submitDisabled,
    triggerSubmit,
    onForgotPasswordButtonPressed,
    allFieldsFilled,
    showLoadingAnimation,
    completionPercentage,
  } = useLoginScreen();

  return (
    <SafeAreaView style={styles.page}>
      <AnimatedProgressBar value={completionPercentage} duration={250} />
      <View style={styles.pageContentWrapper}>
        <FormProvider {...formData}>
          <View style={styles.formColumn}>
            <FormTextField
              clearTextOnFocus={false}
              textContentType="emailAddress"
              keyboardType="email-address"
              name="email"
              label="Indirizzo email"
              autoComplete="email"
            />
            <FormTextField 
            textContentType="password"
            autoComplete="password" 
            name="password" 
            label="Password" 
            type="password" />
          </View>
          <View style={styles.mainActionContainer}>
            <Text
              style={[
                styles.mainActionLabel,
                !allFieldsFilled ? styles.textDisabled : undefined,
              ]}
            >
              Ci sei quasi...
            </Text>
            <Button
              onPress={triggerSubmit}
              disabled={showLoadingAnimation ?? submitDisabled}
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
                <Text style={styles.buttonText}>Accedi</Text>
              )}
            </Button>
          </View>
          <View style={styles.secondaryActionsWrapper}>
            <View style={styles.secondaryActionContainer}>
              <Text style={styles.secondaryActionText}>
                Password dimenticata?
              </Text>
              <Text
                style={styles.secondaryActionLink}
                onPress={onForgotPasswordButtonPressed}
              >
                Clicca qui
              </Text>
            </View>
          </View>
        </FormProvider>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.displayName = "LoginScreen";
LoginScreen.RouteName = "login" as const;

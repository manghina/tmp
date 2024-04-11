import React, { memo } from "react";
import { SafeAreaView } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { useLoginScreen } from "./index.hooks";
import { FormTextField } from "@app/components/_form/FormTextField";
import { styles } from "./styles";
import LottieView from "lottie-react-native";

const headerBackgroundGraphicsPercentageOverflow = 20;

type LoginScreenProps = {};

export const LoginScreen = memo(({}: LoginScreenProps) => {
  const {
    formData,
    submitDisabled,
    triggerSubmit,
    onForgotPasswordButtonPressed,
    onRegisterButtonPressed,
    allFieldsFilled,
    showLoadingAnimation,
  } = useLoginScreen();

  return (
    <SafeAreaView style={styles.page}>
      <View
        style={[
          styles.blueRoundedDecoration,
          {
            width: `${100 + headerBackgroundGraphicsPercentageOverflow}%`,
            left: `${-headerBackgroundGraphicsPercentageOverflow / 2}%`,
          },
        ]}
      />
      <View style={styles.pageContentWrapper}>
        <View>
          <Text h1>Accedi</Text>
          <Text style={styles.pageSubtitle}>Seleziona metodo preferito</Text>
        </View>
        <FormProvider {...formData}>
          <View style={styles.formColumn}>
            <FormTextField
              autoCompleteType="email"
              autoCorrect={false}
              clearTextOnFocus={false}
              keyboardType="email-address"
              name="email"
              label="Indirizzo email"
            />
            <FormTextField password={true} secureTextEntry={true} autoCorrect={false} name="password" label="Password" type="password" />
          </View>
          <View style={styles.mainActionContainer}>
            <Text
              style={[
                styles.mainActionLabel,
                !allFieldsFilled ? styles.textDisabled : undefined,
              ]}
            >
              Sblocca ingresso applicazione
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
            {/* {showLoadingAnimation ? (
              <LottieView
                source={require("../../../assets/animations/loading.json")}
                autoPlay
                speed={1}
                loop={true}
                style={{ width: "100%", height: 40 }}
              />
            ) : (
              <Button
                label="Accedi"
                onPress={triggerSubmit}
                disabled={submitDisabled}
              />
            )} */}
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
            <View style={styles.secondaryActionContainer}>
              <Text style={styles.secondaryActionText}>
                Non hai un profilo?
              </Text>
              <Text
                style={styles.secondaryActionLink}
                onPress={onRegisterButtonPressed}
              >
                Registrati
              </Text>
            </View>
          </View>
        </FormProvider>
      </View>
    </SafeAreaView>
  );
});

LoginScreen.displayName = "LoginScreen";

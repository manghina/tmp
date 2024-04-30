import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { usePasswordResetSuccessScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";

export const PasswordResetSuccessScreen = () => {
  const { goToLoginScreen } = usePasswordResetSuccessScreen();

  return (
    <View style={styles.pageContainer}>
      <LottieView
        source={require("../../../assets/animations/confetti.json")}
        autoPlay
        speed={0.6}
        loop={false}
        style={styles.animationContainer}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentTopContainer}>
          <Text style={styles.title}>Congratulazioni!</Text>
          <Text style={styles.text}>
            Ottima scelta!{"\n"}
            La tua nuova password è davvero perfetta!
          </Text>
        </View>
        <Button
          style={styles.button}
          label="Accedi"
          onPress={goToLoginScreen}
        />
      </View>
    </View>
  );
};

PasswordResetSuccessScreen.displayName = "PasswordResetSuccessScreen";
PasswordResetSuccessScreen.RouteName = "password-reset-success" as const;

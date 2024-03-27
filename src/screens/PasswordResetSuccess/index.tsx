import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { usePasswordResetSuccessScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { colorTokens } from "../../theme/colors/tokens";

export const PasswordResetSuccessScreen = () => {
  const { goToHomeScreen, goToLoginScreen } = usePasswordResetSuccessScreen();

  return (
    <View flex width={"100%"} backgroundColor={colorTokens.elevationSurfaceAlternative}>
      <View centerV centerH paddingH-20>
        <LottieView
          source={require("../../../assets/animations/confetti.json")}
          autoPlay
          speed={0.6}
          loop={false}
          style={{ width: "100%", height: 300 }}
        />
        <Text Title color={colorTokens.colorTextAlternativeDefault} marginB-4 center>
          Congratulazioni!
        </Text>
        <Text regular16Text color={colorTokens.colorTextAccentGray} center>
          Reset password avvenuto con successo.
        </Text>
        <Text regular16Text color={colorTokens.colorTextAccentGray} center>
          Ora puoi riprendere ad utilizzare l’applicazione.
        </Text>

        <Text
          center
          default14Text
          color={colorTokens.colorTextAccentGray}
          marginT-80
          onPress={goToHomeScreen}
        >
          Torna alla schermata iniziale
        </Text>
        <Button
          marginT-8
          BlueButton
          style={{ width: "100%", borderWidth: 0 }}
          label="Accedi"
          onPress={goToLoginScreen}
        />
      </View>
    </View>
  );
};

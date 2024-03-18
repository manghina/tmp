import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { useRequestProfessionalSuccessScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";

export const RequestProfessionalSuccessScreen = () => {
  const { goToHomeScreen } = useRequestProfessionalSuccessScreen();

  return (
    <View flex style={styles.viewContainer}>
      <View centerV centerH paddingH-20>
        <LottieView
          source={require("../../../assets/animations/success.json")}
          autoPlay
          speed={1}
          loop={false}
          style={styles.animation}
        />
        <Text marginB-4 center Title style={styles.title}>
          Congratulazioni!
        </Text>
        <Text regular16Text center style={styles.text} marginB-88>
          Transazione avvenuta con successo. La prenotazione è stata confermata.
        </Text>
        <Button
          style={styles.button}
          label="Chiudi"
          onPress={goToHomeScreen}
          marginB-24
        />
        <Text style={styles.link} regular14Text center>
          Salva appuntamento in iCal
        </Text>
      </View>
    </View>
  );
};

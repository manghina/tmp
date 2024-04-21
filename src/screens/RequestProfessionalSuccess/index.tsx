import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { useRequestPaymentSucceededScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { Pressable } from "react-native";

type RequestPaymentSucceededScreenProps = {};

export const RequestPaymentSucceededScreen =
  ({}: RequestPaymentSucceededScreenProps) => {
    const { onCloseButtonPressed, handleSaveRequestInICal } =
      useRequestPaymentSucceededScreen();

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
            Transazione avvenuta con successo. La prenotazione è stata
            confermata.
          </Text>
          <Button
            style={styles.button}
            label="Chiudi"
            onPress={onCloseButtonPressed}
            marginB-24
          />
          <Pressable onPress={handleSaveRequestInICal}>
            <Text style={styles.link} regular14Text center>
              Salva appuntamento in iCal
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

RequestPaymentSucceededScreen.displayName = "RequestPaymentSucceededScreen";
RequestPaymentSucceededScreen.RouteName = "requests/payment-succeeded" as const;

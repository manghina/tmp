import { View, Text, Button, Image, Modal } from "react-native-ui-lib";
import WebView from "react-native-webview";
import homeBgImage from "@assets/img/doc1.png";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useHomeScreen } from "./index.hooks";
import React from "react";

export const HomeScreen = () => {
  const {
    visibleWebView,
    onUserRegisterButtonPressed,
    onProfessionalRegisterButtonPressed,
    onLoginButtonPressed,
    onTermsAndConditionsButtonPressed,
    onPrivacyPolicyButtonPressed,
    onWebViewClose,
  } = useHomeScreen();

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.pageContent}>
        <View style={styles.background} />
        <View>
          <Text style={styles.title}>Registrati</Text>
          <View row>
            <Text style={styles.subtitle}>Benvenuto in </Text>
            <Text style={styles.appName}>Sweep</Text>
          </View>
        </View>
        <Image source={homeBgImage} style={styles.backgroundImage} />
        <View style={styles.mainActionsContainer}>
          <Button
            style={styles.userRegisterButton}
            onPress={onUserRegisterButtonPressed}
          >
            <Text style={styles.ctaText}>Crea profilo paziente</Text>
          </Button>
          <Text style={styles.separationText}>in alternativa</Text>
          <Button
            style={styles.professionalRegisterButton}
            onPress={onProfessionalRegisterButtonPressed}
          >
            <Text
              style={[styles.ctaText, styles.professionalRegisterButtonLabel]}
            >
              Iscriviti come medico
            </Text>
          </Button>
        </View>
        {/*
        <Button
          GrayButton
          iconSource={GoogleSVG}
          iconStyle={{}}
          label="Continua con Google"
          marginT-16
          paddingH-32
          style={{ width: "100%", height: 52 }}
          onPress={() => {}}
        />
        <Button
          GrayButton
          iconSource={AppleSVG}
          iconStyle={{}}
          label="Continua con Apple"
          marginT-16
          paddingH-32
          style={{ width: "100%", height: 52 }}
          onPress={() => {}}
        />
           */}
        <View style={styles.secondaryActionContainer}>
          <Text style={styles.secondaryActionText}>Hai già un profilo?</Text>
          <Text
            style={styles.secondaryActionLink}
            onPress={onLoginButtonPressed}
          >
            Accedi
          </Text>
        </View>
        <View style={styles.userAgreements}>
          <Text style={styles.infoText}>Continuando si accettano </Text>
          <Text
            style={styles.infoLink}
            onPress={onTermsAndConditionsButtonPressed}
          >
            T&C
          </Text>
          <Text style={styles.infoText}> e </Text>
          <Text style={styles.infoLink} onPress={onPrivacyPolicyButtonPressed}>
            Privacy Policy
          </Text>
          <Text style={styles.infoText}> di Sweep AI.</Text>
        </View>
        <Modal
          visible={visibleWebView}
          presentationStyle="pageSheet"
          animationType="slide"
          onRequestClose={onWebViewClose}
        >
          <WebView source={{ uri: "www.sweepit.ai" }}></WebView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

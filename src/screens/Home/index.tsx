import { View, Text, Button, Image, Modal, Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import HomeBgImage from "@assets/img/home-screen-welcome.png";
import { useState } from "react";
import { SafeAreaView } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [visibleWebView, setVisibleWebView] = useState(false);

  return (
    <SafeAreaView>
      <View paddingH-25>
        <Text Title defaultColor>
          Registrati
        </Text>
        <Text regular16>
          Benvenuto in{" "}
          <Text
            defaultColor
            style={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            Sweep
          </Text>
        </Text>
        <Image marginT-24 source={HomeBgImage} style={{ width: "100%" }} />
        <View
          style={{
            backgroundColor: "#3C77E880",
            width: 800,
            height: 800,
            borderRadius: 800,
            position: "absolute",
            top: -500,
            left: -200,
            zIndex: -1,
          }}
        />

        <View center>
          <Button
            BlueButton
            label="Crea un nuovo profilo"
            marginT-20
            paddingH-32
            style={{ width: "100%" }}
            onPress={() => navigation.navigate("Register")}
          >
            {/* <SignupSVG /> */}
          </Button>
          <Button
            marginT-20
            style={{
              paddingVertical: 16,
              borderWidth: 0,
              backgroundColor: Colors.orange10,
              width: "100%",
            }}
            onPress={() => {
              navigation.navigate("ProfessionalRegister");
            }}
          >
            <Text style={{ color: "#FFF" }}>Registrazione Dottore</Text>
          </Button>
          {/*
          <Text marginT-16 regular14>
            in alternativa
          </Text>
             */}
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
        <Text default14 marginT-24>
          Hai già un profilo?{" "}
          <Text
            link
            style={{ fontStyle: "italic" }}
            onPress={() => navigation.replace("LoginOptions")}
          >
            Accedi
          </Text>
        </Text>

        <Text marginT-24 gray12>
          Continuando si accettano{" "}
          <Text
            link
            underline
            style={{ fontStyle: "italic" }}
            onPress={() => setVisibleWebView(true)}
          >
            T&C
          </Text>{" "}
          e{" "}
          <Text
            link
            underline
            style={{ fontStyle: "italic" }}
            onPress={() => setVisibleWebView(true)}
          >
            Privacy Policy
          </Text>{" "}
          di Sweep AI.
        </Text>

        <Modal
          visible={visibleWebView}
          presentationStyle={"pageSheet"}
          animationType={"slide"}
          onRequestClose={() => setVisibleWebView(false)}
        >
          <WebView source={{ uri: "www.sweepit.ai" }}></WebView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

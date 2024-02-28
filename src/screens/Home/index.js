"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
var react_native_ui_lib_1 = require("react-native-ui-lib");
var native_1 = require("@react-navigation/native");
var signup_button_svg_1 = require("@assets/icons/signup-button.svg");
var google_svg_1 = require("@assets/icons/google.svg");
var apple_svg_1 = require("@assets/icons/apple.svg");
var react_native_webview_1 = require("react-native-webview");
var home_screen_welcome_png_1 = require("@assets/img/home-screen-welcome.png");
var react_1 = require("react");
var react_native_1 = require("react-native");
var HomeScreen = function () {
    var navigation = (0, native_1.useNavigation)();
    var _a = (0, react_1.useState)(false), visibleWebView = _a[0], setVisibleWebView = _a[1];
    return (<react_native_1.SafeAreaView>
      <react_native_ui_lib_1.View paddingH-25>
        <react_native_ui_lib_1.Text Title defaultColor>
          Registrati
        </react_native_ui_lib_1.Text>
        <react_native_ui_lib_1.Text regular16>
          Benvenuto in{" "}
          <react_native_ui_lib_1.Text defaultColor style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Sweep
          </react_native_ui_lib_1.Text>
        </react_native_ui_lib_1.Text>
        <react_native_ui_lib_1.Image marginT-24 source={home_screen_welcome_png_1.default} style={{ width: "100%" }}/>
        <react_native_ui_lib_1.View style={{
            backgroundColor: "#3C77E880",
            width: 800,
            height: 800,
            borderRadius: 800,
            position: "absolute",
            top: -500,
            left: -200,
            zIndex: -1,
        }}/>

        <react_native_ui_lib_1.View center>
          <react_native_ui_lib_1.Button BlueButton label="Crea un nuovo profilo" marginT-20 paddingH-32 style={{ width: "100%" }} onPress={function () { return navigation.navigate("Register"); }}>
            <react_native_ui_lib_1.View>
              <signup_button_svg_1.default />
            </react_native_ui_lib_1.View>
          </react_native_ui_lib_1.Button>
          <react_native_ui_lib_1.Button style={{ paddingVertical: 16, borderWidth: 0, backgroundColor: react_native_ui_lib_1.Colors.orange10 }} onPress={function () { navigation.navigate("ProfessionalRegister"); }}>
            <react_native_ui_lib_1.Text style={{ color: "#FFF" }}>Doctors register</react_native_ui_lib_1.Text>
          </react_native_ui_lib_1.Button>
          <react_native_ui_lib_1.Text marginT-16 regular14>
            in alternativa
          </react_native_ui_lib_1.Text>
        </react_native_ui_lib_1.View>
        <react_native_ui_lib_1.Button GrayButton iconSource={google_svg_1.default} iconStyle={{}} label="Continua con Google" marginT-16 paddingH-32 style={{ width: "100%", height: 52 }} onPress={function () { }}/>
        <react_native_ui_lib_1.Button GrayButton iconSource={apple_svg_1.default} iconStyle={{}} label="Continua con Apple" marginT-16 paddingH-32 style={{ width: "100%", height: 52 }} onPress={function () { }}/>
        <react_native_ui_lib_1.Text default14 marginT-24>
          Hai già un profilo?{" "}
          <react_native_ui_lib_1.Text link style={{ fontStyle: "italic" }} onPress={function () { return navigation.replace("LoginOptions"); }}>
            Accedi
          </react_native_ui_lib_1.Text>
        </react_native_ui_lib_1.Text>

        <react_native_ui_lib_1.Text marginT-24 gray12>
          Continuando si accettano{" "}
          <react_native_ui_lib_1.Text link underline style={{ fontStyle: "italic" }} onPress={function () { return setVisibleWebView(true); }}>
            T&C
          </react_native_ui_lib_1.Text>{" "}
          e{" "}
          <react_native_ui_lib_1.Text link underline style={{ fontStyle: "italic" }} onPress={function () { return setVisibleWebView(true); }}>
            Privacy Policy
          </react_native_ui_lib_1.Text>{" "}
          di Sweep AI.
        </react_native_ui_lib_1.Text>

        <react_native_ui_lib_1.Modal visible={visibleWebView} presentationStyle={"pageSheet"} animationType={"slide"} onRequestClose={function () { return setVisibleWebView(false); }}>
          <react_native_webview_1.default source={{ uri: "www.sweepit.ai" }}></react_native_webview_1.default>
        </react_native_ui_lib_1.Modal>
      </react_native_ui_lib_1.View>
    </react_native_1.SafeAreaView>);
};
exports.HomeScreen = HomeScreen;

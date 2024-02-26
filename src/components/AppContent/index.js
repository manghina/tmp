"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContent = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var index_hooks_1 = require("./index.hooks");
var Tutorial_1 = require("@app/screens/Tutorial");
var Loader_1 = require("@app/screens/Loader");
var Home_1 = require("@app/screens/Home");
var LoginOptions_1 = require("@app/screens/LoginOptions");
var Register_1 = require("@app/screens/Register");
var ArrowDown_1 = require("@app/components/ArrowDown");
var LoginByMailScreen_1 = require("@app/screens/LoginByMailScreen");
var CustomToast_1 = require("@app/components/CustomToast");
var NavigationService_1 = require("@app/models/NavigationService");
var UserHome_1 = require("@app/screens/UserHome");
var UserHeader_1 = require("@app/components/users/UserHeader");
var ForgotPassword_1 = require("@app/screens/ForgotPassword");
var PasswordResetSuccess_1 = require("@app/screens/PasswordResetSuccess");
var RequestChat_1 = require("@app/screens/RequestChat");
var RequestsProfessionalOffers_1 = require("@app/screens/RequestsProfessionalOffers");
var HeaderGoBack_1 = require("../HeaderGoBack");
var RequestConfirmPayment_1 = require("@app/screens/RequestConfirmPayment");
var ProfessionalRegister_1 = require("@app/screens/ProfessionalRegister");
var CountryChooser_1 = require("@app/screens/CountryChooser");
var ChooseSpecialization_1 = require("src/screens/ChooseSpecialization");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
exports.AppContent = (0, react_1.memo)(function (_a) {
    var _b = (0, index_hooks_1.useAppContent)();
    return (<>
      <CustomToast_1.CustomToast />
      <native_1.NavigationContainer ref={function (navRef) {
            if (navRef) {
                NavigationService_1.default.setNavigationRef(navRef);
            }
        }}>
        <Stack.Navigator initialRouteName="Tutorial">
          <Stack.Screen name="Loader" component={Loader_1.LoaderScreen} options={{
            headerShown: false,
        }}/>
          <Stack.Screen name="Tutorial" component={Tutorial_1.TutorialScreen} options={{
            headerShown: false,
        }}/>
          <Stack.Screen name="Home" component={Home_1.HomeScreen} options={{
            headerShown: false,
        }}/>
          <Stack.Screen name="LoginOptions" component={LoginOptions_1.LoginOptionsScreen} options={{
            headerShown: false,
        }}/>
          <Stack.Screen name="LoginWithMail" component={LoginByMailScreen_1.LoginByMailScreen} options={{
            title: "Accedi",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: react_native_ui_lib_1.Colors.blackText,
            },
            animation: "slide_from_bottom",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
        }}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword_1.ForgotPasswordScreen} options={{
            title: "",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
            animation: "slide_from_bottom",
        }}/>
          <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccess_1.PasswordResetSuccessScreen} options={{
            headerShown: false,
        }}/>
          <Stack.Screen name="Register" component={Register_1.RegisterScreen} options={{
            title: "Registrati",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: react_native_ui_lib_1.Colors.blackText,
            },
            animationTypeForReplace: "push",
            animation: "slide_from_bottom",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
        }}/>
          <Stack.Screen name="ProfessionalRegister" component={ProfessionalRegister_1.ProfessionalRegisterScreen} options={{
            title: "Registrati",
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: react_native_ui_lib_1.Colors.blackText,
            },
            animationTypeForReplace: "push",
            animation: "slide_from_bottom",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
        }}/>
          <Stack.Screen name="CountryChooser" component={CountryChooser_1.CountryChooserScreen} options={{
            headerTitle: "",
            animationTypeForReplace: "push",
            animation: "slide_from_bottom",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
        }}/>
          <Stack.Screen name="choose-specialization" component={ChooseSpecialization_1.ChooseSpecializationScreen} options={{
            headerTitle: "",
            animationTypeForReplace: "push",
            animation: "slide_from_bottom",
            headerLeft: function () { return <ArrowDown_1.ArrowDown />; },
        }}/>
          <Stack.Screen name="UserHome" component={UserHome_1.UserHomeScreen} options={{
            header: function () { return <UserHeader_1.UserHeader />; },
        }}/>
          <Stack.Screen name="requests/chat" component={RequestChat_1.RequestChatScreen} options={{
            animation: "slide_from_bottom",
            headerTintColor: "transparent",
            headerTransparent: true,
            header: function () { return <HeaderGoBack_1.HeaderGoBack />; },
        }}/>
          <Stack.Screen name="requests/professional-offers" component={RequestsProfessionalOffers_1.RequestsProfessionalOffersScreen} options={{
            animation: "slide_from_bottom",
            headerTintColor: "transparent",
            headerTransparent: true,
            header: function () { return <HeaderGoBack_1.HeaderGoBack />; },
        }}/>
          <Stack.Screen name="requests/confirm-payment" component={RequestConfirmPayment_1.RequestConfirmPaymentScreen} options={{
            animation: "slide_from_bottom",
            headerTintColor: "transparent",
            headerTransparent: true,
            header: function () { return <HeaderGoBack_1.HeaderGoBack />; },
        }}/>
        </Stack.Navigator>
      </native_1.NavigationContainer>
    </>);
});
exports.AppContent.displayName = "AppContent";

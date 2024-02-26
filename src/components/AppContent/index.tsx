import { FC, memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native-ui-lib";

import { useAppContent } from "./index.hooks";

import { TutorialScreen } from "@app/screens/Tutorial";
import { LoaderScreen } from "@app/screens/Loader";
import { HomeScreen } from "@app/screens/Home";
import { LoginOptionsScreen } from "@app/screens/LoginOptions";
import { RegisterScreen } from "@app/screens/Register";
import { ArrowDown } from "@app/components/ArrowDown";
import { LoginByMailScreen } from "@app/screens/LoginByMailScreen";

import { CustomToast } from "@app/components/CustomToast";
import NavigationService from "@app/models/NavigationService";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserHeader } from "@app/components/users/UserHeader";
import { ForgotPasswordScreen } from "@app/screens/ForgotPassword";
import { PasswordResetSuccessScreen } from "@app/screens/PasswordResetSuccess";
import { RequestChatScreen } from "@app/screens/RequestChat";
import { RequestsProfessionalOffersScreen } from "@app/screens/RequestsProfessionalOffers";
import { HeaderGoBack } from "../HeaderGoBack";
import { RequestConfirmPaymentScreen } from "@app/screens/RequestConfirmPayment";
import { ProfessionalRegisterScreen } from "@app/screens/ProfessionalRegister";
import { CountryChooserScreen } from "@app/screens/CountryChooser";
import { ChooseSpecializationScreen } from "src/screens/ChooseSpecialization";

const Stack = createNativeStackNavigator();

export const AppContent: FC = memo(({}) => {
  const {} = useAppContent();

  return (
    <>
      <CustomToast />
      <NavigationContainer
        ref={(navRef) => {
          if (navRef) {
            NavigationService.setNavigationRef(navRef);
          }
        }}
      >
        <Stack.Navigator initialRouteName="Tutorial">
          <Stack.Screen
            name="Loader"
            component={LoaderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tutorial"
            component={TutorialScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginOptions"
            component={LoginOptionsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginWithMail"
            component={LoginByMailScreen}
            options={{
              title: "Accedi",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: Colors.blackText,
              },
              animation: "slide_from_bottom",
              headerLeft: () => <ArrowDown />,
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              title: "",
              headerLeft: () => <ArrowDown />,
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="PasswordResetSuccess"
            component={PasswordResetSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: Colors.blackText,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <ArrowDown />,
            }}
          />
          <Stack.Screen
            name="ProfessionalRegister"
            component={ProfessionalRegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "HelveticaNeue-CondensedBlack",
                fontSize: 32,
                color: Colors.blackText,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <ArrowDown />,
            }}
          />
          <Stack.Screen
            name="CountryChooser"
            component={CountryChooserScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <ArrowDown />,
            }}
          />
          <Stack.Screen
            name="choose-specialization"
            component={ChooseSpecializationScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <ArrowDown />,
            }}
          />
          <Stack.Screen
            name="UserHome"
            component={UserHomeScreen}
            options={{
              header: () => <UserHeader />,
            }}
          />
          <Stack.Screen
            name="requests/chat"
            component={RequestChatScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name="requests/professional-offers"
            component={RequestsProfessionalOffersScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name="requests/confirm-payment"
            component={RequestConfirmPaymentScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";

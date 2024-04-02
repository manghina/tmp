import { FC, memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native-ui-lib";

import { useAppContent } from "./index.hooks";

import { TutorialScreen } from "@app/screens/Tutorial";
import { LoaderScreen } from "@app/screens/Loader";
import { HomeScreen } from "@app/screens/Home";
import { LoginScreen } from "src/screens/Login";
import { UserRegisterScreen } from "src/screens/UserRegister";
import { CustomToast } from "@app/components/CustomToast";
import NavigationService from "@app/models/NavigationService";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserHeader } from "@app/components/_users/UserHeader";
import { ForgotPasswordScreen } from "@app/screens/ForgotPassword";
import { PasswordResetSuccessScreen } from "@app/screens/PasswordResetSuccess";
import { RequestChatScreen } from "@app/screens/RequestChat";
import { RequestsProfessionalOffersScreen } from "@app/screens/RequestsProfessionalOffers";
import { HeaderGoBack } from "@app/components/HeaderGoBack";
import { RequestConfirmPaymentScreen } from "@app/screens/RequestConfirmPayment";
import { ProfessionalRegisterScreen } from "@app/screens/ProfessionalRegister";
import { FilterableSelectScreen } from "@app/screens/FilterableSelect";
import { RequestProfessionalSuccessScreen } from "@app/screens/RequestProfessionalSuccess";
import { ProfessionalHomeScreen } from "@app/screens/ProfessionalHome";
import { ProfessionalOfferDetailScreen } from "@app/screens/ProfessionalOfferDetail";
import { UserSettingsScreen } from "@app/screens/UserSettings";
import { RequestCancelByProfessionalScreen } from "@app/screens/RequestCancelByProfessional";
import { BackButton } from "@app/components/BackButton";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

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
        <Stack.Navigator initialRouteName="tutorial">
          <Stack.Screen
            name="form-filterable-select"
            component={FilterableSelectScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name="loader"
            component={LoaderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="tutorial"
            component={TutorialScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "#97B5Ed",
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "#D8E0F2",
            }}
          />
          <Stack.Screen
            name="forgot-password"
            component={ForgotPasswordScreen}
            options={{
              title: "",
              header: () => <HeaderGoBack />,
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="password-reset-success"
            component={PasswordResetSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="user-register"
            component={UserRegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="professional-register"
            component={ProfessionalRegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="professional-home"
            component={ProfessionalHomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name="professional-offers/details"
            component={ProfessionalOfferDetailScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name="user-home"
            component={UserHomeScreen}
            options={{
              header: () => <UserHeader />,
            }}
          />
          <Stack.Screen
            name="user-settings"
            component={UserSettingsScreen}
            options={{
              header: () => <UserHeader />,
            }}
          />
          <Stack.Screen
            name="requests/cancel"
            component={RequestCancelByProfessionalScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
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
          <Stack.Screen
            name="RequestProfessionalSuccess"
            component={RequestProfessionalSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";

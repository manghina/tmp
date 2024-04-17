import { FC, memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import { RequestSearchProfessionalsScreen } from "src/screens/RequestSearchProfessionals";
import { HeaderGoBack } from "@app/components/HeaderGoBack";
import { HeaderProfileGoBack } from "@app/components/HeaderProfileGoBack";
import { RequestConfirmPaymentScreen } from "@app/screens/RequestConfirmPayment";
import { ProfessionalRegisterScreen } from "@app/screens/ProfessionalRegister";
import { FilterableSelectScreen } from "@app/screens/FilterableSelect";
import { RequestPaymentSucceededScreen } from "@app/screens/RequestProfessionalSuccess";
import { ProfessionalHomeScreen } from "@app/screens/ProfessionalHome";
import { ProfessionalOfferDetailScreen } from "@app/screens/ProfessionalOfferDetail";
import { UserProfileScreen } from "@app/screens/ProfileScreen";
import { ProfileEditScreen } from "@app/screens/ProfileEditScreen";
import { RequestCancelByProfessionalScreen } from "@app/screens/RequestCancelByProfessional";
import { BackButton } from "@app/components/BackButton";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { OtpVerificationScreen } from "@app/screens/OtpVerificationScreen";
import { UserChooseProfessionalOfferScreen } from "@app/screens/UserChooseProfessionalOffer";
import { RequestCancelByUserScreen } from "@app/screens/RequestCancelByUser";
import { UserRequestAppointmentDetailsScreen } from "src/screens/UserRequestAppointmentDetails";

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
        <Stack.Navigator initialRouteName={RequestCancelByUserScreen.RouteName}>
          <Stack.Screen
            name={FilterableSelectScreen.RouteName}
            component={FilterableSelectScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={OtpVerificationScreen.RouteName}
            component={OtpVerificationScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={LoaderScreen.RouteName}
            component={LoaderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={TutorialScreen.RouteName}
            component={TutorialScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={HomeScreen.RouteName}
            component={HomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "#97B5Ed",
            }}
          />
          <Stack.Screen
            name={LoginScreen.RouteName}
            component={LoginScreen}
            options={{
              title: "Accedi",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name={ForgotPasswordScreen.RouteName}
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
            name={PasswordResetSuccessScreen.RouteName}
            component={PasswordResetSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={UserRegisterScreen.RouteName}
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
            name={ProfessionalRegisterScreen.RouteName}
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
            name={ProfessionalHomeScreen.RouteName}
            component={ProfessionalHomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
            }}
          />
          <Stack.Screen
            name={RequestCancelByUserScreen.RouteName}
            component={RequestCancelByUserScreen}
            options={{
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={ProfessionalOfferDetailScreen.RouteName}
            component={ProfessionalOfferDetailScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={UserHomeScreen.RouteName}
            component={UserHomeScreen}
            options={{
              header: () => <UserHeader />,
            }}
          />
          <Stack.Screen
            name={UserProfileScreen.RouteName}
            component={UserProfileScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderProfileGoBack />,
            }}
          />
          <Stack.Screen
            name={ProfileEditScreen.RouteName}
            component={ProfileEditScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={RequestCancelByProfessionalScreen.RouteName}
            component={RequestCancelByProfessionalScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={RequestChatScreen.RouteName}
            component={RequestChatScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={RequestSearchProfessionalsScreen.RouteName}
            component={RequestSearchProfessionalsScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={UserChooseProfessionalOfferScreen.RouteName}
            component={UserChooseProfessionalOfferScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={RequestConfirmPaymentScreen.RouteName}
            component={RequestConfirmPaymentScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={RequestPaymentSucceededScreen.RouteName}
            component={RequestPaymentSucceededScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={UserRequestAppointmentDetailsScreen.RouteName}
            component={UserRequestAppointmentDetailsScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";

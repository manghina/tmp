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
import { ArrowDown } from "@app/screens/Register/ArrowDown";
import { LoginByMailScreen } from "@app/screens/LoginByMailScreen";

import { CustomToast } from "@app/components/CustomToast";
import NavigationService from "@app/models/NavigationService";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserHeader } from "@app/components/users/UserHeader";

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
            name="UserHome"
            component={UserHomeScreen}
            options={{
              header: () => <UserHeader />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";

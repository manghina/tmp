import { FC, memo } from "react";
import { useAppContent } from "./index.hooks";
import { CustomToast } from "../CustomToast";
import { TutorialScreen } from "../../screens/Tutorial";
import { LoaderScreen } from "../../screens/Loader";
import { HomeScreen } from "../../screens/Home";
import { LoginOptionsScreen } from "../../screens/LoginOptions";
import { Colors } from "react-native-ui-lib";
import { RegisterScreen } from "../../screens/Register";
import { ArrowDown } from "../../screens/Register/ArrowDown";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginByMailScreen } from "../../screens/LoginByMailScreen";

const Stack = createNativeStackNavigator();

export const AppContent: FC = memo(({}) => {
  const {} = useAppContent();

  return (
    <>
      <CustomToast />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loader">
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";

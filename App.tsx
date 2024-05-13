import { initTheme } from "./src/theme";
import { LoaderScreen } from "react-native-ui-lib";
import React from 'react';

import { AppContent } from "./src/components/AppContent";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux-store";
import { enableDebugging } from "./src/utils/debug";
import { PersistGate } from "redux-persist/integration/react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { stripePublishableKey } from "./src/config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { colorTokensLight, colorTokensDark } from "./src/theme/colors/tokens";
import { useColorScheme } from "react-native/Libraries/Utilities/Appearance";
if (process.env.NODE_ENV === "development") {
  enableDebugging().then();
}

export default function App() {
  const colorScheme = useColorScheme(); 
  console.log('Selected theme:', colorScheme);
  initTheme();

  return (
    <StripeProvider publishableKey={stripePublishableKey()}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoaderScreen />}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <AppContent />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
}

import { initTheme } from "@app/theme";
import { Assets, LoaderScreen } from "react-native-ui-lib";

import { AppContent } from "./src/components/AppContent";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux-store";
import { enableDebugging } from "./src/utils/debug";
import { PersistGate } from "redux-persist/integration/react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { stripePublishableKey } from "./src/config";

Assets.loadAssetsGroup("icons", {
  visibility: require("./assets/icons/visibility.png"),
  visibilityOff: require("./assets/icons/visibility-off.png"),
});

if (process.env.NODE_ENV === "development") {
  enableDebugging().then();
}

export default function App() {
  initTheme();

  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoaderScreen />}>
          <AppContent />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
}

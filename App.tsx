import { initTheme } from "@app/theme";
import { LoaderScreen } from "react-native-ui-lib";

import { AppContent } from "./src/components/AppContent";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux-store";
import { enableDebugging } from "./src/utils/debug";
import { PersistGate } from "redux-persist/integration/react";

if (process.env.NODE_ENV === "development") {
  enableDebugging().then();
}

export default function App() {
  initTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoaderScreen />}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

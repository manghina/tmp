import { initTheme } from "@app/theme";
import { Assets } from "react-native-ui-lib";

import { AppContent } from "./src/components/AppContent";
import { Provider } from "react-redux";
import store from "./src/redux-store";
import { enableDebugging } from "./src/utils/debug";

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
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

import { initTheme } from "@app/theme";
import { Assets } from "react-native-ui-lib";

import { AppContent } from "./src/components/AppContent";
import { Provider } from "react-redux";
import store from "./src/redux-store";

Assets.loadAssetsGroup("icons", {
  visibility: require("./assets/icons/visibility.png"),
  visibilityOff: require("./assets/icons/visibilityOff.png"),
});

export default function App() {
  initTheme();

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@app/theme");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var AppContent_1 = require("./src/components/AppContent");
var react_redux_1 = require("react-redux");
var redux_store_1 = require("./src/redux-store");
var debug_1 = require("./src/utils/debug");
var react_1 = require("redux-persist/integration/react");
var stripe_react_native_1 = require("@stripe/stripe-react-native");
var config_1 = require("./src/config");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
if (process.env.NODE_ENV === "development") {
    (0, debug_1.enableDebugging)().then();
}
function App() {
    (0, theme_1.initTheme)();
    return (<stripe_react_native_1.StripeProvider publishableKey={(0, config_1.stripePublishableKey)()}>
      <react_redux_1.Provider store={redux_store_1.default}>
        <react_1.PersistGate persistor={redux_store_1.persistor} loading={<react_native_ui_lib_1.LoaderScreen />}>
          <react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
            <AppContent_1.AppContent />
          </react_native_gesture_handler_1.GestureHandlerRootView>
        </react_1.PersistGate>
      </react_redux_1.Provider>
    </stripe_react_native_1.StripeProvider>);
}
exports.default = App;

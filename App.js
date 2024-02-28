"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@app/theme");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var AppContent_1 = require("./src/components/AppContent");
var react_redux_1 = require("react-redux");
var redux_store_1 = require("./src/redux-store");
var debug_1 = require("./src/utils/debug");
var react_1 = require("redux-persist/integration/react");
if (process.env.NODE_ENV === "development") {
    (0, debug_1.enableDebugging)().then();
}
function App() {
    (0, theme_1.initTheme)();
    return (<react_redux_1.Provider store={redux_store_1.default}>
      <react_1.PersistGate persistor={redux_store_1.persistor} loading={<react_native_ui_lib_1.LoaderScreen />}>
        <AppContent_1.AppContent />
      </react_1.PersistGate>
    </react_redux_1.Provider>);
}
exports.default = App;

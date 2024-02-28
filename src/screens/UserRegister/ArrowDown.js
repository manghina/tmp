"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDown = void 0;
var react_1 = require("react");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var native_1 = require("@react-navigation/native");
var ArrowDownIcon_1 = require("@app/components/SvgIcons/ArrowDownIcon");
var ArrowDown = function () {
    var navigation = (0, native_1.useNavigation)();
    return (<react_native_ui_lib_1.TouchableOpacity onPress={function () {
            navigation.pop();
        }}>
      <ArrowDownIcon_1.default />
    </react_native_ui_lib_1.TouchableOpacity>);
};
exports.ArrowDown = ArrowDown;

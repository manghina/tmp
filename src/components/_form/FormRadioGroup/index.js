"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRadioGroup = void 0;
var react_1 = require("react");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var index_hooks_1 = require("./index.hooks");
exports.FormRadioGroup = (0, react_1.memo)(function (_a) {
    var name = _a.name;
    var _b = (0, index_hooks_1.useFormRadioGroup)(name);
    return (<react_native_ui_lib_1.View>
      <react_native_ui_lib_1.Text>Form radio group</react_native_ui_lib_1.Text>
    </react_native_ui_lib_1.View>);
});

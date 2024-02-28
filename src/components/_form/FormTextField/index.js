"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTextField = void 0;
var react_1 = require("react");
var index_hooks_1 = require("./index.hooks");
var react_native_ui_lib_1 = require("react-native-ui-lib");
var TextInputStyle = {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: "black",
};
exports.FormTextField = (0, react_1.memo)(function (_a) {
    var name = _a.name, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, props = __rest(_a, ["name", "label", "type"]);
    var _c = (0, index_hooks_1.useFormTextField)(name, type), value = _c.value, handleChange = _c.handleChange, error = _c.error, hideText = _c.hideText, onVisibilityIconTapped = _c.onVisibilityIconTapped;
    return (<react_native_ui_lib_1.TextField marginT-8 grey10 value={value} label={label} onChangeText={handleChange} secureTextEntry={hideText} enableErrors={!!error} validationMessage={error !== null && error !== void 0 ? error : undefined} autoCapitalize="none" autoCorrect={false} style={[TextInputStyle, props.style]} trailingAccessory={type === "password" && (<react_native_ui_lib_1.Button round onPress={onVisibilityIconTapped} iconSource={hideText ? react_native_ui_lib_1.Assets.icons.visibility : react_native_ui_lib_1.Assets.icons.visibilityOff} style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 5,
            }} color={react_native_ui_lib_1.Colors.white} iconProps={{
                width: 30,
                height: 30,
            }}/>)} {...props}/>);
});
exports.FormTextField.displayName = "FormTextField";

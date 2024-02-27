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
var React = require("react");
var react_native_svg_1 = require("react-native-svg");
var PictureIcon = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (<react_native_svg_1.default width={"100%"} height={"100%"} fill="none" viewBox="0 0 40 40" {...props}>
    <react_native_svg_1.Path fill={color !== null && color !== void 0 ? color : "#3C77E8"} fillOpacity={0.5} d="m4.301 31.683-.033.034c-.45-.984-.733-2.1-.85-3.334.117 1.217.433 2.317.883 3.3ZM15.002 17.3a3.967 3.967 0 1 0 0-7.933 3.967 3.967 0 0 0 0 7.933Z"/>
    <react_native_svg_1.Path fill={color !== null && color !== void 0 ? color : "#3C77E8"} fillOpacity={0.5} d="M26.982 3.333H13.015c-6.066 0-9.683 3.617-9.683 9.684v13.966c0 1.817.317 3.4.933 4.734 1.434 3.166 4.5 4.95 8.75 4.95h13.967c6.067 0 9.683-3.617 9.683-9.684V13.017c0-6.067-3.616-9.684-9.683-9.684Zm6.967 17.5c-1.3-1.116-3.4-1.116-4.7 0l-6.934 5.95c-1.3 1.117-3.4 1.117-4.7 0l-.566-.466c-1.184-1.034-3.067-1.134-4.4-.234l-6.234 4.184c-.366-.934-.583-2.017-.583-3.284V13.017c0-4.7 2.483-7.184 7.183-7.184h13.967c4.7 0 7.183 2.484 7.183 7.184v8l-.216-.184Z"/>
  </react_native_svg_1.default>);
};
exports.default = PictureIcon;

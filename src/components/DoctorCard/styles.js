"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var variants_1 = require("@app/theme/typographies/variants");
exports.styles = react_native_1.StyleSheet.create({
    professionalName: __assign({}, variants_1.textVariants.p1BoldNormal),
    speciality: __assign({}, variants_1.textVariants.p2BoldItalic),
    moreInformations: __assign({}, variants_1.textVariants.p3BoldNormal),
    distance: __assign({}, variants_1.textVariants.p2BoldNormal),
    sectionTitle: __assign({}, variants_1.textVariants.p2MediumNormal),
    informativeContent: __assign({}, variants_1.textVariants.p2BoldItalic),
});

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
exports.sagas = exports.selectors = exports.uiStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var selectors = require("@app/redux-store/slices/ui/ui.selectors");
exports.selectors = selectors;
var extraActions = require("@app/redux-store/extra-actions");
var sagas = require("@app/redux-store/slices/ui/ui.sagas");
exports.sagas = sagas;
var initialState = {
    isDialogOpen: {},
    forgotPasswordStepperCounter: 1,
    professionalRegisterStepperCounter: 1,
};
exports.uiStore = (0, toolkit_1.createSlice)({
    name: "ui",
    initialState: initialState,
    reducers: {
        setDialogOpen: function (state, action) {
            var _a;
            var _b;
            state.isDialogOpen = __assign(__assign({}, ((_b = state.isDialogOpen) !== null && _b !== void 0 ? _b : initialState.isDialogOpen)), (_a = {}, _a[action.payload.dialogType] = action.payload.open, _a));
        },
        setForgotPasswordStepperCounter: function (state, action) {
            state.forgotPasswordStepperCounter = action.payload;
        },
        setProfessionalRegisterStepperCounter: function (state, action) {
            state.professionalRegisterStepperCounter = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder.addCase(extraActions.appStartup, function (state) {
            state.isDialogOpen = __assign({}, initialState.isDialogOpen);
            state.forgotPasswordStepperCounter =
                initialState.forgotPasswordStepperCounter;
            state.professionalRegisterStepperCounter =
                initialState.professionalRegisterStepperCounter;
        });
    },
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sagas = exports.selectors = exports.userStore = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var selectors = require("./user.selectors");
exports.selectors = selectors;
var sagas = require("./user.sagas");
exports.sagas = sagas;
var extraActions = require("@app/redux-store/extra-actions");
exports.userStore = (0, toolkit_1.createSlice)({
    name: "user",
    initialState: {
        me: {},
        cookie: null,
    },
    reducers: {
        registrationFormSubmitted: function (state, action) { },
    },
    extraReducers: function (builder) {
        builder.addCase(extraActions.postAccountsSessions.success, function (state, action) {
            state.cookie = action.payload.data.cookie;
        });
        builder.addCase(extraActions.getUsersMe.success, function (state, action) {
            state.me = action.payload.data.user;
        });
        builder.addCase(extraActions.appStartup, function (state, action) {
            state.cookie = null; // Scommentare per prevenire navigazione diretta a home screen utente
        });
    },
});

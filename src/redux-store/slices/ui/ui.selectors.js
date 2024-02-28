"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfessionalRegisterStepperCounter = exports.getForgotPasswordStepperCounter = exports.getIsDialogOpen = void 0;
var getIsDialogOpen = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.ui) === null || _a === void 0 ? void 0 : _a.isDialogOpen; };
exports.getIsDialogOpen = getIsDialogOpen;
var getForgotPasswordStepperCounter = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.ui) === null || _a === void 0 ? void 0 : _a.forgotPasswordStepperCounter; };
exports.getForgotPasswordStepperCounter = getForgotPasswordStepperCounter;
var getProfessionalRegisterStepperCounter = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.ui) === null || _a === void 0 ? void 0 : _a.professionalRegisterStepperCounter; };
exports.getProfessionalRegisterStepperCounter = getProfessionalRegisterStepperCounter;

import {put, takeEvery} from "redux-saga/effects";
import {actions} from "../index";
import {ApiFailData} from "../../extra-actions/apis/api-builder";
import {PatchPasswordsParams} from "../../extra-actions/apis/patch-passwords";

export function* uiSaga() {}

export function* forgotPasswordFailBackToStep1() {
    yield takeEvery(
        [actions.patchPasswords.fail],
        function* (action) {
            const {status} = action.payload as ApiFailData<PatchPasswordsParams>;
            if (status === 400) {
                yield put(actions.setForgotPasswordStepperCounter(1));
            }
        },
    );
}
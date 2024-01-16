import { put, select, take, takeEvery } from "redux-saga/effects";
import { actions, RootState } from "@app/redux-store";
import { getCookie } from "./user.selectors";

export function* userInitSaga() {
  yield takeEvery(actions.appStartup.type, function* () {
    // @ts-ignore
    const cookie: RootState["user"]["cookie"] = yield select(getCookie);

    if (cookie) {
      yield put(actions.getUsersMe.request({}));
    }
  });
}

export function* userDataSaga() {
  yield takeEvery(actions.registrationFormSubmitted, function* (action) {
    const { email, password } = action.payload;

    yield put(
      actions.postAccounts.request({
        email,
        password,
      }),
    );

    yield take(actions.postAccounts.success);

    // Login to retrieve cookie
    yield put(
      actions.postAccountsSessions.request({
        email,
        password,
      }),
    );

    yield take(actions.postAccountsSessions.success);

    const { firstName, lastName, birthDate } = action.payload;

    yield put(
      actions.postUsers.request({
        name: firstName,
        lastname: lastName,
        birthDate,
      }),
    );

    yield take(actions.postUsers.success);

    yield put(actions.getUsersMe.request({}));
  });
}

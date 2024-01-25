import { put, select, take, takeEvery } from "redux-saga/effects";
import { actions, RootState } from "@app/redux-store";
import { getCookie } from "./user.selectors";
import NavigationService from "@app/models/NavigationService";
import { ApiFailData } from "../../extra-actions/apis/api-builder";
import { PostAccountsParams } from "@app/redux-store/extra-actions/apis/post-accounts";
import { PostAccountsSessionsParams } from "@app/redux-store/extra-actions/apis/post-accounts-sessions";
import { PostUsersParams } from "@app/redux-store/extra-actions/apis/post-users";
import { GetUsersMeParams } from "@app/redux-store/extra-actions/apis/get-users-me";

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

    // @ts-ignore
    const postAccountResultAction = yield take([
      actions.postAccounts.success,
      actions.postAccounts.fail,
    ]);

    if (postAccountResultAction.type === actions.postAccounts.fail.type) {
      const { status } =
        postAccountResultAction.payload as ApiFailData<PostAccountsParams>;

      // Conflict status
      if (status === 409) {
        // Account already exists, redirect to log in options
        NavigationService.replace("LoginOptions");
      }

      return;
    }

    // Login to retrieve cookie
    yield put(
      actions.postAccountsSessions.request({
        email,
        password,
      }),
    );

    // @ts-ignore
    const postAccountsSessionsResultAction = yield take([
      actions.postAccountsSessions.success,
      actions.postAccountsSessions.fail,
    ]);

    if (
      postAccountsSessionsResultAction.type ===
      actions.postAccountsSessions.fail.type
    ) {
      // Maybe do nothing here?
      const {} =
        postAccountsSessionsResultAction.payload as ApiFailData<PostAccountsSessionsParams>;
      return;
    }

    const { firstName, lastName, birthDate } = action.payload;

    yield put(
      actions.postUsers.request({
        name: firstName,
        lastname: lastName,
        birthDate,
      }),
    );

    // @ts-ignore
    const postUsersResultAction = yield take([
      actions.postUsers.success,
      actions.postUsers.fail,
    ]);

    if (postUsersResultAction.type === actions.postUsers.fail.type) {
      // Maybe do nothing here?
      const { status } =
        postUsersResultAction.payload as ApiFailData<PostUsersParams>;
      return;
    }

    yield put(actions.getUsersMe.request({}));
  });
}

export function* autoLoginSaga() {
  yield takeEvery(
    [actions.getUsersMe.success, actions.getUsersMe.fail],
    function* (action) {
      if (action.type === actions.getUsersMe.success.type) {
        NavigationService.replace("UserHome");
      } else {
        const { status } = action.payload as ApiFailData<GetUsersMeParams>;

        switch (status) {
          case 401:
            NavigationService.replace("LoginOptions");
            break;
          case 403:
            NavigationService.replace("LoginOptions");
            break;
          case 404:
            // Here we need to create a page only for account creation without email and password

            break;
          default:
            break;
        }
      }
    },
  );
}

export function* postLoginSaga() {
  yield takeEvery(actions.postAccountsSessions.success, function* () {
    yield put(actions.getUsersMe.request({}));
  });
}

export function* postResetPasswordSaga() {
  yield takeEvery(actions.patchPasswords.success, function* () {
    NavigationService.replace("PasswordResetSuccess");
  });
}

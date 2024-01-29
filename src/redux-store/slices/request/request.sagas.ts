import {
  call,
  delay,
  put,
  race,
  select,
  take,
  takeEvery,
} from "redux-saga/effects";
import { actions, selectors } from "@app/redux-store";
import { IRequest, Request } from "@app/models/Request";

export function* sendMessageSaga() {
  yield takeEvery(actions.messageSubmitted, function* (messageSubmittedAction) {
    let currentRequest: IRequest | null = yield select(
      selectors.getCurrentRequest,
    );

    if (!currentRequest) {
      yield put(
        actions.postUsersMeRequests.request({
          userMessage: messageSubmittedAction.payload,
        }),
      );
    } else {
      yield put(
        actions.postUsersMeRequestsMessagesByRequestId.request({
          requestId: currentRequest._id,
          userMessage: messageSubmittedAction.payload,
        }),
      );
    }
  });
}

function* pollRequestTask() {
  while (true) {
    const currentRequest: Request | null = yield select(
      selectors.getCurrentRequest,
    );

    if (!currentRequest) {
      yield put(actions.stopPollingRequest());
    } else {
      yield put(
        actions.getUsersMeRequestsByRequestId.request({
          requestId: currentRequest._id,
        }),
      );

      // @ts-ignore
      const action = yield take([
        actions.getUsersMeRequestsByRequestId.success,
        actions.getUsersMeRequestsByRequestId.fail,
      ]) as any;

      if (action.type === actions.getUsersMeRequestsByRequestId.fail.type) {
        yield put(actions.stopPollingRequest());
      }

      yield delay(4000);
    }
  }
}

export function* requestUpdatingSaga() {
  while (true) {
    yield take(actions.startPollingRequest);
    yield race([call(pollRequestTask), take(actions.stopPollingRequest)]);
  }
}

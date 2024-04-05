import { put, select, take, takeEvery } from "redux-saga/effects";
import { actions, selectors } from "@app/redux-store";

export function* fetchProfessionalOffersSaga() {
  yield takeEvery(actions.professionalOffersPageVisited, function* () {
    yield put(
      actions.getProfessionalsMeProfessionalOffers.request({
        active: true,
      }),
    );

    yield take([
      actions.getProfessionalsMeProfessionalOffers.success,
      actions.getProfessionalsMeProfessionalOffers.fail,
    ]);

    const archivedPage: number = yield select(
      selectors.getProfessionalOfferArchivedPage,
    );
    const archivedPerPage: number = yield select(
      selectors.getProfessionalOfferArchivedPerPage,
    );

    yield put(
      actions.getProfessionalsMeProfessionalOffers.request({
        archived: true,
        page: archivedPage,
        perPage: archivedPerPage,
      }),
    );

    yield take([
      actions.getProfessionalsMeProfessionalOffers.success,
      actions.getProfessionalsMeProfessionalOffers.fail,
    ]);
  });
}

export function* nextPageArchivedProfessionalOffersSaga() {
  yield takeEvery(actions.increaseArchivedProfessionalOffersPage, function* () {
    const page: number = yield select(
      selectors.getProfessionalOfferArchivedPage,
    );
    const perPage: number = yield select(
      selectors.getProfessionalOfferArchivedPerPage,
    );

    yield put(
      actions.getProfessionalsMeProfessionalOffers.request({
        archived: true,
        page,
        perPage,
      }),
    );
  });
}

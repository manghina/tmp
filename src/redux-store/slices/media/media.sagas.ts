import { call, put, select, take, takeEvery } from "redux-saga/effects";
import { actions, selectors } from "@app/redux-store";
import { UploadData } from "@app/redux-store/slices/media/media.interfaces";
import axios, { AxiosResponse } from "axios";

type SignedUrlAction =
  | typeof actions.postS3SignedUrls.success
  | typeof actions.postS3SignedUrls.fail;

export function* mediaCreationSaga() {
  yield takeEvery(actions.mediaUpload, function* (action) {
    yield put(actions.setIsUploadingMedia(true));

    const { type, fileName, mime, isPrivate, data } = action.payload;

    yield put(actions.postS3SignedUrls.request({ fileName, mime, isPrivate }));

    const signedUrlResponseAction: SignedUrlAction = yield take([
      actions.postS3SignedUrls.success,
      actions.postS3SignedUrls.fail,
    ]);

    if (signedUrlResponseAction.type === actions.postS3SignedUrls.fail.type) {
      yield put(actions.setIsUploadingMedia(false));
      return;
    }

    const uploadData: UploadData = yield select(selectors.getMediaUploadData);

    // upload media to the signed url
    const s3Response: AxiosResponse = yield call(
      axios.put,
      uploadData.signedUrl,
      data,
      {
        headers: {
          "Content-Type": mime,
          "Access-Control-Allow-Origin": "*",
        },
      },
    );

    if (s3Response.status > 300) {
      yield put(actions.setIsUploadingMedia(false));
      return;
    }

    yield put(
      actions.postMedias.request({
        title: fileName,
        description: "",
        mime,
        key: uploadData.key,
        extension: uploadData.extension,
        type,
        filename: uploadData.cleanedName,
        isPrivate,
      }),
    );

    yield put(actions.setIsUploadingMedia(false));
  });
}

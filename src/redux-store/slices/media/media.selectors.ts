import { RootState } from "@app/redux-store";
import { createSelector } from "@reduxjs/toolkit";
import { Media } from "@app/models/Media";

export const getIsUploadingMedia = (state: RootState) =>
  state.media?.isUploadingMedia ?? false;
export const getMediaUploadData = (state: RootState) =>
  state.media?.uploadData ?? null;
export const getUploadedMedia = createSelector(
  (state: RootState) => state.media.uploadedMedia,
  (iMedia) => (iMedia ? new Media(iMedia) : null),
);

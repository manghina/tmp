import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as selectors from "@app/redux-store/slices/media/media.selectors";
import { MediaState } from "@app/redux-store/slices/media/media.interfaces";
import * as extraActions from "@app/redux-store/extra-actions";
import * as sagas from "@app/redux-store/slices/media/media.sagas";
import { MediaTypes } from "@app/models/Media";

const initialState: MediaState = {
  isUploadingMedia: false,
  uploadedMedia: null,
  uploadData: null,
};

export const mediaStore = createSlice({
  name: "media",
  initialState,
  reducers: {
    setIsUploadingMedia: (state, action: PayloadAction<boolean>) => {
      state.isUploadingMedia = action.payload;
    },
    mediaUpload: (
      state,
      action: PayloadAction<{
        fileName: string;
        mime: string;
        type: MediaTypes;
        data: Uint8Array;
        isPrivate: boolean;
      }>,
    ) => {
      state.uploadData = initialState.uploadData;
      state.uploadedMedia = initialState.uploadedMedia;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isUploadingMedia = initialState.isUploadingMedia;
      state.uploadData = initialState.uploadData;
      state.uploadedMedia = initialState.uploadedMedia;
    });
    builder.addCase(extraActions.postS3SignedUrls.success, (state, action) => {
      state.uploadData = action.payload.data;
    });
    builder.addCase(extraActions.postMedias.success, (state, action) => {
      state.uploadedMedia = action.payload.data.media;
    });
  },
});

export { selectors, sagas };

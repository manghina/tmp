import { IMedia } from "@app/models/Media";

export interface UploadData {
  signedUrl: string;
  key: string;
  extension: string;
  cleanedName: string;
  fullPath: string;
}

export interface MediaState {
  isUploadingMedia: boolean;
  uploadedMedia: IMedia | null;
  uploadData: UploadData | null;
}

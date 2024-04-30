import {
  privateS3BucketName,
  publicS3BucketName,
  s3AwsRegion,
} from "@app/config";
import * as FileSystem from "expo-file-system";

export enum MediaTypes {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export type IMedia = {
  _id: string;
  key: string;
  extension: string;
  type?: MediaTypes;
  filename?: string;
  title?: string;
  description?: string;
  isPrivate: boolean;
  created?: Date;
};

export class Media implements IMedia {
  _id!: string;
  key!: string;
  extension!: string;
  type?: MediaTypes;
  filename?: string;
  title?: string;
  description?: string;
  isPrivate!: boolean;
  created?: Date;

  constructor(iMediaFe: IMedia) {
    if (iMediaFe) {
      Object.assign(this, iMediaFe);
    }
  }

  private get _bucketName(): string {
    return this.isPrivate ? privateS3BucketName() : publicS3BucketName();
  }

  getUrlFromKeyAndExtension(): string {
    if (this.filename === undefined) {
      return `https://${this._bucketName}.s3.${s3AwsRegion()}.amazonaws.com/${
        this.key
      }/original.${this.extension}`;
    }

    return `https://${this._bucketName}.s3.${s3AwsRegion()}.amazonaws.com/${
      this.key
    }/${this.filename}.${this.extension}`;
  }
}

export const convertImageToBlob = async (
  imagePath: string,
): Promise<Uint8Array> => {
  const file = await FileSystem.readAsStringAsync(imagePath, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const byteCharacters = atob(file);

  // Crea un array di byte
  const bytes = new Uint8Array(byteCharacters.length);

  // Riempie l'array con i byte del file
  for (let i = 0; i < byteCharacters.length; i++) {
    bytes[i] = byteCharacters.charCodeAt(i);
  }

  return bytes;
};

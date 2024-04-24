class MediaManagerSingleton {
  private _imageData: Uint8Array | null = null;

  set imageData(data: Uint8Array | null) {
    this._imageData = data;
  }

  get imageData() {
    return this._imageData;
  }
}

const mediaManagerSingleton = new MediaManagerSingleton();

export default mediaManagerSingleton;

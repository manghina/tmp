import { useCallback, useState } from "react";
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import useFormField from "@app/hooks/useFormField";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";

export const useFormImagePicker = (name: string) => {
  const dispatch = useDispatch();

  const { setValue, value, error } = useFormField<string | undefined>({ name });

  const [chooseMediaSourceDialogOpen, setChooseMediaSourceDialogOpen] =
    useState(false);

  const evaluatePickerResponse = useCallback(
    (imagePickerResponse: ImagePickerResponse) => {
      if (imagePickerResponse.didCancel) {
        dispatch(
          actions.setFeedback({
            message: "Operazione annullata",
            type: "info",
          }),
        );

        return;
      }

      if (imagePickerResponse.errorMessage) {
        dispatch(
          actions.setFeedback({
            message: `Errore durante l'acquisizione dell'immagine:\n${imagePickerResponse.errorMessage}`,
            type: "error",
          }),
        );

        return;
      }

      if (imagePickerResponse.errorCode) {
        dispatch(
          actions.setFeedback({
            message: `Errore durante l'acquisizione dell'immagine:\n${imagePickerResponse.errorCode}`,
            type: "error",
          }),
        );

        return;
      }

      if (imagePickerResponse.assets) {
        const asset = imagePickerResponse.assets[0];
        setValue(asset.uri);
        setChooseMediaSourceDialogOpen(false);
      }
    },
    [dispatch, setValue, setChooseMediaSourceDialogOpen],
  );

  const onChooseFromCameraClicked = useCallback(async () => {
    const imagePickerResponse = await launchCamera({
      mediaType: "photo",
    });

    evaluatePickerResponse(imagePickerResponse);
  }, [evaluatePickerResponse]);

  const onChooseFromLibraryClicked = useCallback(async () => {
    const imagePickerResponse = await launchImageLibrary({
      mediaType: "photo",
    });

    evaluatePickerResponse(imagePickerResponse);
  }, [evaluatePickerResponse]);

  const onImagePickerPressed = useCallback(() => {
    setChooseMediaSourceDialogOpen(true);
  }, [setChooseMediaSourceDialogOpen]);

  const onDialogClose = useCallback(() => {
    setChooseMediaSourceDialogOpen(false);
  }, [setChooseMediaSourceDialogOpen]);

  return {
    value,
    error,
    chooseMediaSourceDialogOpen,
    onImagePickerPressed,
    onDialogClose,
    onChooseFromCameraClicked,
    onChooseFromLibraryClicked,
  };
};

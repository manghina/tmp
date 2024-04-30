import { useCallback, useMemo, useState } from "react";
import {
  Asset,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { actions } from "@app/redux-store";
import { useDispatch } from "react-redux";
import { Dialog, PanningProvider, Text, View } from "react-native-ui-lib";
import CameraIcon from "@app/components/SvgIcons/CameraIcon";
import PictureIcon from "@app/components/SvgIcons/PictureIcon";
import { Pressable } from "react-native";
import { styles } from "./styles";

export const useImagePicker = (onImagePicked: (image: Asset) => void) => {
  const dispatch = useDispatch();

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
        onImagePicked(asset);
        setChooseMediaSourceDialogOpen(false);
      }
    },
    [dispatch, setChooseMediaSourceDialogOpen, onImagePicked],
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

  const dialog = useMemo(
    () => (
      <Dialog
        visible={chooseMediaSourceDialogOpen}
        onDismiss={onDialogClose}
        panDirection={PanningProvider.Directions.DOWN}
        containerStyle={styles.dialogContainer}
      >
        <View style={styles.dialogContent}>
          <Text style={styles.dialogTitle}>Seleziona immagine</Text>
          <Pressable onPress={onChooseFromCameraClicked}>
            <View style={styles.option}>
              <CameraIcon size={30} />
              <Text style={styles.optionText}>Scatta una foto</Text>
            </View>
          </Pressable>
          <Pressable onPress={onChooseFromLibraryClicked}>
            <View style={styles.option}>
              <PictureIcon size={30} />
              <Text style={styles.optionText}>Scegli dalla galleria</Text>
            </View>
          </Pressable>
        </View>
      </Dialog>
    ),
    [
      chooseMediaSourceDialogOpen,
      onChooseFromCameraClicked,
      onChooseFromLibraryClicked,
    ],
  );

  return { dialog, onImagePickerPressed };
};

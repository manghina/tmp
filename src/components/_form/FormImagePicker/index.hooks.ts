import { useCallback } from "react";
import { Asset } from "react-native-image-picker";
import useFormField from "@app/hooks/useFormField";
import { useImagePicker } from "@app/hooks/useImagePicker";

export const useFormImagePicker = (name: string) => {
  const { setValue, value, error } = useFormField<string | undefined>({ name });

  const onImagePicked = useCallback(
    (image: Asset) => {
      setValue(image.uri);
    },
    [setValue],
  );

  const { dialog, onImagePickerPressed } = useImagePicker(onImagePicked);

  return {
    value,
    error,
    dialog,
    onImagePickerPressed,
  };
};

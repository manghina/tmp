import { useFormImagePicker } from "./index.hooks";
import {
  View,
  Text,
  TouchableOpacity,
  Dialog,
  Image,
  PanningProvider,
} from "react-native-ui-lib";
import { memo } from "react";
import { colorTokensLight } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import PictureIcon from "@app/components/SvgIcons/PictureIcon";
import CameraIcon from "@app/components/SvgIcons/CameraIcon";

type FormImagePickerProps = {
  name: string;
  label?: string;
};

export const FormImagePicker = memo(({ name, label }: FormImagePickerProps) => {
  const {
    value,
    error,
    chooseMediaSourceDialogOpen,
    onImagePickerPressed,
    onDialogClose,
    onChooseFromCameraClicked,
    onChooseFromLibraryClicked,
  } = useFormImagePicker(name);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: dimensionsTokens.paddingXs,
      }}
    >
      <TouchableOpacity onPress={onImagePickerPressed}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            aspectRatio: 16 / 10,
            backgroundColor: colorTokensLight.colorBackgroundAccentBlueSubtler,
            borderWidth: 1.5,
            borderStyle: value ? "solid" : "dashed",
            borderColor: colorTokensLight.colorBackgroundAccentBlueSubtle,
            borderRadius: 10,
          }}
        >
          {value ? (
            <View style={{ width: "100%", height: "100%", borderRadius: 10 }}>
              <Image
                src={value}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
          ) : (
            <View style={{ width: 40 }}>
              <PictureIcon />
            </View>
          )}
        </View>
      </TouchableOpacity>
      {error && (
        <Text style={{ ...textVariants.p2MediumNormal, color: "red" }}>
          {error}
        </Text>
      )}
      {label && <Text style={{ ...textVariants.h5BoldItalic }}>{label}</Text>}
      <Dialog
        visible={chooseMediaSourceDialogOpen}
        onDismiss={onDialogClose}
        panDirection={PanningProvider.Directions.DOWN}
        containerStyle={{
          backgroundColor: "#FFF",
          padding: dimensionsTokens.paddingSm,
          borderRadius: 10,
          // Shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            gap: dimensionsTokens.paddingSm,
          }}
        >
          <Text
            style={{
              ...textVariants.p1BoldNormal,
            }}
          >
            Seleziona immagine
          </Text>
          <TouchableOpacity onPress={onChooseFromCameraClicked}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: dimensionsTokens.paddingSm,
              }}
            >
              <View style={{ width: 40, height: 40 }}>
                <CameraIcon />
              </View>
              <Text
                style={{
                  ...textVariants.p2MediumNormal,
                }}
              >
                Scatta una foto
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChooseFromLibraryClicked}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: dimensionsTokens.paddingSm,
              }}
            >
              <View style={{ width: 40, height: 40 }}>
                <PictureIcon />
              </View>
              <Text
                style={{
                  ...textVariants.p2MediumNormal,
                }}
              >
                Scegli dalla galleria
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Dialog>
    </View>
  );
});

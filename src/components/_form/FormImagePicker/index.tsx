import { useFormImagePicker } from "./index.hooks";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import { memo } from "react";
import { colorTokensLight } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import PictureIcon from "@app/components/SvgIcons/PictureIcon";

type FormImagePickerProps = {
  name: string;
  label?: string;
};

export const FormImagePicker = memo(({ name, label }: FormImagePickerProps) => {
  const { value, error, dialog, onImagePickerPressed } =
    useFormImagePicker(name);

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
      {dialog}
    </View>
  );
});

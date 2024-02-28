import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokensLight } from "@app/theme/colors/tokens";
import { withOpacity } from "@app/theme/colors/palette";

export const styles = StyleSheet.create({
  fieldContainer: {
    display: "flex",
    gap: Dimensions.small.spacing_100,
  },
  field: {
    borderColor: withOpacity(
      colorTokensLight.colorBorderAccentGrayBolder,
      0.15,
    ),
    borderWidth: 1.5,
    borderRadius: 12,
  },
  input: {
    paddingTop: dimensionsTokens.paddingXs,
    paddingLeft: dimensionsTokens.paddingXs,
    paddingRight: dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXs,
  },
  showHidePasswordButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: "transparent",
    borderWidth: 0,
    opacity: 0.5,
  },
  showHidePasswordIcon: {
    width: 25,
    height: 25,
  },
  focused: {
    borderColor: colorTokensLight.colorBorderAccentBlue,
  },
  error: {
    borderColor: "red",
  },
  label: { ...textVariants.p2MediumNormal },
  errorText: { ...textVariants.p2MediumNormal, color: "red" },
});

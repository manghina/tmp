import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokens } from "@app/theme/colors/tokens";
import { withOpacity } from "@app/theme/colors/palette";

export const styles = StyleSheet.create({
  fieldContainer: {
    display: "flex",
    gap: Dimensions.small.spacing_100,
  },
  field: {
    borderColor: withOpacity(colorTokens.colorBorderAccentGrayBolder, 0.15),
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: colorTokens.colorBackgroundInput,
  },
  input: {
    flex: 1,
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
    borderWidth: 0,
    opacity: 0.5,
  },
  showHidePasswordIcon: {
    width: 25,
    height: 25,
  },
  focused: {
    borderColor: colorTokens.colorBorderAccentBlue,
  },
  error: {
    borderColor: "#FF0000",
  },
  label: { ...textVariants.p2MediumNormal },
  errorText: { ...textVariants.p2MediumNormal, color: "#FF0000" },
});

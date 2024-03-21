import { StyleSheet } from "react-native";
import { colorTokens } from "../../theme/colors/tokens";
import { dimensionsTokens } from "../../theme/spacings/tokens";
import { FontWeights } from "../../theme/typographies/properties";

export const styles = StyleSheet.create({
  radioButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: { color: colorTokens.colorTextSubtle, fontWeight: FontWeights.MEDIUM },

  radioBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    borderColor: colorTokens.colorBorder,
    borderWidth: 1,
    borderStyle: "solid",
    color: colorTokens.colorIconWarning,
  },
  selectedRadioBtn: {
    backgroundColor: colorTokens.colorIconInverse,
    color: colorTokens.colorText,
    fontWeight: FontWeights.BLACK,
  },
  firstRadioBtn: {
    borderTopLeftRadius: dimensionsTokens.paddingXs / 2,
    borderTopRightRadius: dimensionsTokens.paddingXs / 2,
  },
  lastRadioBtn: {
    borderBottomLeftRadius: dimensionsTokens.paddingXs / 2,
    borderBottomRightRadius: dimensionsTokens.paddingXs / 2,
    borderTopWidth: 0,
  },
  icon: {
    borderRadius: 99,
    borderColor: "red", //colorTokens.colorBorder,
    borderStyle: "solid",
    backgroundColor: "red", //colorTokens.colorBackgroundNeutralSubtle,
    borderWidth: 1,
  },
  selectedIcon: {
    borderColor: "white",
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: 1,
  },
});

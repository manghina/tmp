import { StyleSheet } from "react-native";
import { colorTokens } from "../../theme/colors/tokens";
import { dimensionsTokens } from "../../theme/spacings/tokens";
import { FontWeights } from "../../theme/typographies/properties";

export const styles = StyleSheet.create({
  container: { backgroundColor: "red" },
  radioBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    borderWidth: 1,
    borderStyle: "solid",
  },
  selectedRadioBtn: {
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
    fontWeight: FontWeights.BLACK,
    borderColor: colorTokens.colorBackgroundNeutralBold,
  },
  unselectedRadioBtn: {
    borderColor: colorTokens.colorBorder,
    color: colorTokens.colorIconWarning,
  },

  label: { color: colorTokens.colorTextSubtle, fontWeight: FontWeights.MEDIUM },
  selectedLabel: {
    color: colorTokens.colorTextInverse,
    fontWeight: FontWeights.MEDIUM,
  },
});

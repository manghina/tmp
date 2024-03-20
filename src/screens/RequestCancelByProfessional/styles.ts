import { StyleSheet } from "react-native";
import { dimensionsTokens } from "../../theme/spacings/tokens";
import { colorTokens, colorTokensLight } from "../../theme/colors/tokens";
import { Dimensions, headerHeight } from "../../theme/spacings/dimensions";
import { FontSizes, FontWeights } from "../../theme/typographies/properties";

export const styles = StyleSheet.create({
  container: {
    marginTop: headerHeight,
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingMd,
    backgroundColor: colorTokens.elevationSurface,
  },
  title: {
    color: colorTokensLight.colorTextDanger,
    fontSize: FontSizes.H3 - 2,
    fontWeight: FontWeights.BLACK,
    lineHeight: FontSizes.H2,
    letterSpacing: -0.64,
  },
  paragraphContainer: {},
  paragraph: {
    color: colorTokens.colorTextDefault,
    paddingTop: dimensionsTokens.paddingXs / 3,
    marginBottom: dimensionsTokens.paddingXs / 3,
    fontSize: FontSizes.P1,
    paddingBottom: dimensionsTokens.paddingXs / 3,
  },
  textArea: {
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    borderColor: colorTokens.colorBorder,
    borderWidth: 1,
    borderStyle: "solid",
    height: 156,
    borderRadius: dimensionsTokens.paddingXs / 3,
    fontSize: FontSizes.P1,
    textAlignVertical: "top",
  },
  textAreaEmpty: {
    color: colorTokens.colorTextDisabled,
    fontWeight: FontWeights.MEDIUM,
    fontStyle: "italic",
  },
  textAreaDirty: { color: colorTokens.colorTextDefault },
  paragraphTitle: {
    fontSize: FontSizes.H6,
    fontWeight: FontWeights.BLACK,
    lineHeight: FontSizes.H5,
    color: colorTokens.colorTextDefault,
    letterSpacing: -0.4,
  },
  radioGroup: {},
  radioBtn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    borderColor: colorTokens.colorBorder,
    borderWidth: 1,
    borderStyle: "solid",
    color: colorTokens.colorIconWarning,
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
    borderColor: colorTokens.colorBorderDanger,
    backgroundColor: colorTokens.colorIconDanger,
    borderWidth: 1,
  },
  label: { color: colorTokens.colorTextSubtle, fontWeight: FontWeights.MEDIUM },
  footer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundDangerBold,
    color: colorTokens.colorTextInverse,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  goBackLink: {
    textDecorationLine: "underline",
    color: colorTokens.colorTextDefault,
  },
});

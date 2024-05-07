import { StyleSheet } from "react-native";
import { dimensionsTokens } from "../../theme/spacings/tokens";
import { colorTokens } from "../../theme/colors/tokens";
import * as typographiesProps from "../../theme/typographies/properties";

export const styles = StyleSheet.create({
  viewContainer: {
    width: "100%",
    backgroundColor: colorTokens.elevationSurfaceAlternative,
  },
  animation: { width: "100%", height: 300 },
  button: {
    width: "100%",
    borderWidth: 0,
    //marginTop: 6 * dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  title: {
    color: colorTokens.colorTextAlternativeDefault,
    letterSpacing: typographiesProps.LetterSpacings.H3,
  },
  text: {
    color: colorTokens.colorTextAlternativeSubtlest,
  },
  link: {
    color: colorTokens.colorTextAlternativeSubtlest,
    textDecorationLine: "underline",
    paddingVertical: dimensionsTokens.paddingXs,
  },
});

import { StyleSheet } from "react-native";
import { dimensionsTokens } from "../../theme/spacings/tokens";
import { colorTokensLight } from "../../theme/colors/tokens";
import * as typographiesProps from "../../theme/typographies/properties";

export const styles = StyleSheet.create({
  viewContainer: {
    width: "100%",
    backgroundColor: "#011820", //TODO: aggiungere token
  },
  animation: { width: "100%", height: 300 },
  button: {
    width: "100%",
    borderWidth: 0,
    //marginTop: 6 * dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  title: {
    color: "#fefefe", //TODO: aggiungere token
    letterSpacing: typographiesProps.LetterSpacings.H3,
  },
  text: {
    color: colorTokensLight.colorTextAccentGraySubtle,
  },
  link: {
    color: colorTokensLight.colorTextAccentGraySubtle,
    textDecorationLine: "underline",
    paddingVertical: dimensionsTokens.paddingXs
  },
});

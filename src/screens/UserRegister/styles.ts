import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { FontSizes } from "../../theme/typographies/properties";
import { colorTokensLight } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  pageContainer: { backgroundColor: colorTokens.elevationSurface },
  step: {
    height: "100%",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingSm,
  },
  mainActionLabelContainer: {
    paddingVertical: Dimensions.small.spacing_100,
  },
  mainActionLabelText: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  mainAction: {
    width: "100%",
  },
  backTextButton: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  button: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  buttonText: {
    fontSize: FontSizes.P1,
    color: colorTokensLight.colorTextInverse,
  },
  loadingAnimation: {
    width: "100%",
    height: 20, //FontSizes.H6,
  },
});

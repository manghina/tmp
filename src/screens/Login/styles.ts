  import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { Colors } from "@app/theme/colors/palette";
import { FontSizes } from "../../theme/typographies/properties";
import { colorTokensLight } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
  },
  pageContentWrapper: {
    display: "flex",
    gap: dimensionsTokens.paddingMd,
    padding: dimensionsTokens.paddingSm,
  },
  blueRoundedDecoration: {
    position: "absolute",
    backgroundColor: Colors.Unlisted.LoginBackground,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    height: "38%",
  },
  pageTitle: { ...textVariants.h3CondensedBlackNormal },
  pageSubtitle: { ...textVariants.p1MediumNormal },
  formColumn: {
    display: "flex",
    gap: dimensionsTokens.paddingXs,
  },
  mainActionContainer: {
    display: "flex",
    gap: Dimensions.small.spacing_100,
  },
  mainActionLabel: { ...textVariants.p2MediumNormal, textAlign: "center" },
  secondaryActionsWrapper: {
    display: "flex",
    gap: dimensionsTokens.paddingXs,
  },
  secondaryActionContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  secondaryActionText: { ...textVariants.p2MediumNormal },
  secondaryActionLink: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorTextLink,
  },
  textDisabled: { color: colorTokens.colorTextDisabled },
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

import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";

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
    backgroundColor: "#D7DFF1",
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
});

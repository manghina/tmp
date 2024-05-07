import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokens } from "@app/theme/colors/tokens";
import { Colors } from "@app/theme/colors/palette";
import { FontSizes } from "@app/theme/typographies/properties";

export const styles = StyleSheet.create({
  pageContentWrapper: {
    gap: dimensionsTokens.paddingMd,
    paddingHorizontal: dimensionsTokens.paddingSm,
    paddingVertical: dimensionsTokens.paddingMd,
  },
  blueRoundedDecoration: {
    position: "absolute",
    backgroundColor: Colors.Unlisted.LoginBackground,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    height: "20%",
  },
  pageTitle: { ...textVariants.h3CondensedBlackNormal },
  pageSubtitle: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  contentContainer: {
    gap: dimensionsTokens.paddingXs,
  },
  button: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  buttonText: {
    fontSize: FontSizes.P1,
    color: colorTokens.colorTextInverse,
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
});

import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colorTokens.elevationSurface,
    height: "100%",
  },
  pageContent: {
    paddingHorizontal: dimensionsTokens.paddingSm,
    gap: dimensionsTokens.paddingMd,
  },
  background: {
    position: "absolute",
    aspectRatio: 1,
    width: 800,
    borderRadius: 800,
    transform: [{ translateX: -200 }, { translateY: -500 }],
    backgroundColor: "#3C77E880",
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  subtitle: {
    ...textVariants.p2MediumNormal,
  },
  appName: {
    ...textVariants.p2BoldItalic,
  },
  backgroundImage: { width: "100%", height: 300, borderRadius: 8 },
  mainActionsContainer: {
    gap: dimensionsTokens.paddingXs,
    alignItems: "center",
  },
  userRegisterButton: {
    width: "100%",
    paddingVertical: dimensionsTokens.paddingXs,
  },
  professionalRegisterButton: {
    width: "100%",
    paddingVertical: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  ctaText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextInverse,
  },
  professionalRegisterButtonLabel: {
    color: colorTokens.colorTextDefault,
  },
  separationText: {
    ...textVariants.p2MediumNormal,
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
  userAgreements: {
    display: "flex",
    flexDirection: "row",
  },
  infoText: {
    ...textVariants.p3MediumNormal,
    color: colorTokens.colorTextDisabled,
  },
  infoLink: {
    ...textVariants.p3MediumItalic,
    color: colorTokens.colorTextLink,
  },
});

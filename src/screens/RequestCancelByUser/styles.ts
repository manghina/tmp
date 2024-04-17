import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colorTokens.elevationSurface,
    flex: 1,
  },
  pageContent: {
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    gap: dimensionsTokens.paddingMd,
  },
  headingContainer: {
    gap: dimensionsTokens.padding4Xs,
  },
  headingTitle: {
    ...textVariants.h3CondensedBlackNormal,
    color: colorTokens.colorTextDanger,
  },
  headingSubtitle: {
    ...textVariants.p1MediumNormal,
  },
  motivationsContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  motivationHeading: {
    gap: dimensionsTokens.padding3Xs,
  },
  motivationTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  motivationSubtitle: {
    ...textVariants.p1MediumNormal,
  },
  feedbackContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  feedbackHeading: {
    gap: dimensionsTokens.padding3Xs,
  },
  feedbackTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  feedbackSubtitle: {
    ...textVariants.p1MediumNormal,
  },
  feedbackFieldContainer: {
    height: 156,
  },
  disclaimerContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  disclaimerTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  disclaimerText: {
    ...textVariants.p1MediumNormal,
  },
  ctaContainer: {
    paddingTop: dimensionsTokens.padding3Xs,
    gap: dimensionsTokens.padding3Xs,
  },
  ctaText: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  ctaButton: {
    paddingVertical: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundDangerBold,
  },
  ctaButtonDisabled: {
    backgroundColor: colorTokens.colorBackgroundDanger
  },
});

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
  headingSubtitle: {},
  motivationsContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  motivationHeading: {
    gap: dimensionsTokens.padding3Xs,
  },
  motivationTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  motivationSubtitle: {},
  feedbackContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  feedbackHeading: {
    gap: dimensionsTokens.padding3Xs,
  },
  feedbackTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
  feedbackSubtitle: {},
  feedbackFieldContainer: {
    height: 156,
  },
  disclaimerContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  disclaimerTitle: {
    ...textVariants.h6CondensedBlackNormal,
  },
});

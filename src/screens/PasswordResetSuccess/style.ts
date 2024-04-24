import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colorTokens.elevationSurfaceAlternative,
  },
  animationContainer: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    paddingHorizontal: dimensionsTokens.paddingSm,
    gap: dimensionsTokens.padding6Xl,
  },
  contentTopContainer: {
    gap: dimensionsTokens.paddingSm,
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
    textAlign: "center",
    color: colorTokens.colorTextAlternativeDefault,
  },
  text: {
    ...textVariants.p1MediumNormal,
    textAlign: "center",
    color: colorTokens.colorTextAlternativeSubtlest,
  },
  button: {
    borderWidth: 0,
  },
});

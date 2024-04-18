import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    backgroundColor: colorTokens.elevationSurface,
    gap: dimensionsTokens.paddingMd,
  },
});

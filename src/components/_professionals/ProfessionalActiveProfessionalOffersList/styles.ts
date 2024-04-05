import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  listContainer: {
    gap: Dimensions.small.spacing_100,
    marginBottom: dimensionsTokens.paddingMd,
  },
});

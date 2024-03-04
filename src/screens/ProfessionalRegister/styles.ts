import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";

export const styles = StyleSheet.create({
  stepContent: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingSm,
  },
  fieldsColumn: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  stepperControlsContainer: {
    display: "flex",
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
    marginVertical: Dimensions.small.spacing_100,
  },
  callToAction: {
    width: "100%",
  },
});

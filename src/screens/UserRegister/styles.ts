import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";

export const styles = StyleSheet.create({
  pageContainer: { backgroundColor: "#FFF" },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingSm,
  },
  mainActionLabelContainer: {
    paddingVertical: Dimensions.small.spacing_100,
  },
  mainActionLabelText: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  mainAction: {
    width: "100%",
  },
  backTextButton: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
});

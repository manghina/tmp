import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  topContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  closeButton: {
    position: "absolute",
    top: Dimensions.medium.spacing_200,
    right: Dimensions.medium.spacing_200,
    height: Dimensions.large.spacing_400,
    width: Dimensions.large.spacing_400,
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: colorTokens.elevationSurfaceOverlay,
  },
  closeIcon: {
    color: colorTokens.colorBorderBold,
  },
  rectangle: {
    position: "absolute",
    top: Dimensions.medium.spacing_150,
    width: Dimensions.large.spacing_500,
    height: Dimensions.small.spacing_050,
    backgroundColor: colorTokens.elevationSurfaceOverlay,
    borderRadius: 2,
  },
});

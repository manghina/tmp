import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  handleContainer: {
    position: "absolute",
    top: Dimensions.medium.spacing_150,
    width: "100%",
    padding: 0,
  },
  handleIndicator: {
    width: Dimensions.large.spacing_500,
    backgroundColor: colorTokens.elevationSurfaceOverlay,
  },
  contentContainer: {
    flex: 1,
  },
});

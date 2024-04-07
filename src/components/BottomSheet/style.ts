import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    borderTopLeftRadius: Dimensions.medium.spacing_250,
    borderTopRightRadius: Dimensions.medium.spacing_250,
  },
  handleContainer: {
    position: "absolute",
    top: Dimensions.medium.spacing_150,
    width: "100%",
    padding: 0,
  },
  handleIndicator: {
    width: Dimensions.large.spacing_500,
    backgroundColor: colorTokens.elevationSurface,
  },
  closeButton: {
    zIndex: 1,
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
  contentContainer: {
    flex: 1,
  },
});

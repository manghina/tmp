import { StyleSheet } from "react-native";
import { colorTokens } from "../../../theme/colors/tokens";

export const styles = StyleSheet.create({
  outerIcon: {
    padding: 5,
    borderRadius: 99,
    borderWidth: 1,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOuterIcon: {
    borderColor: colorTokens.colorBackgroundSelected,
    borderStyle: "solid",
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
    borderWidth: 2,
  },
  unselectedOuterIcon: {
    borderColor: colorTokens.colorBorder,
    borderStyle: "solid",
    borderWidth: 1.5,
  },

  innerIcon: {
    backgroundColor: colorTokens.colorBackgroundSelected,
    borderRadius: 99,
    position: "absolute",
  },
});

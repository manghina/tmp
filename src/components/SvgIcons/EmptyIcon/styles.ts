import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  //outerIcon: {},
  innerIcon: {
    backgroundColor: "black",
    borderRadius: 99,
    position: "absolute",
    borderColor: "black",
    marginLeft: 1,
  },

  outerIcon: {
    padding: 5,
    borderRadius: 99,
    borderWidth: 1,
  },
  selectedOuterIcon: {
    borderColor: "white",
    borderStyle: "solid",
    backgroundColor: "white",
  },
  unselectedOuterIcon: {
    borderColor: "red", //colorTokens.colorBorder,
    borderStyle: "solid",
    backgroundColor: "red", //colorTokens.colorBackgroundNeutralSubtle,
  },
  selectedInnerIcon: {},
  unselectedInnerIcon: {},
});

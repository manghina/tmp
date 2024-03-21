import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outerIcon: {},
  innerIcon: {
    backgroundColor: "black",
    borderRadius: 99,
    position: "absolute",
    borderColor: "black",
    marginLeft: 1,
  },
});

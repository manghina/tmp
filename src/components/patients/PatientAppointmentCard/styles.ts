import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 10,
  },
  cardContainerUserInputAwaited: {
    borderColor: "#FF8F1F",
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  cardContainerAiInputAwaited: {
    borderColor: "#FFF",
    backgroundColor: "#fff",
  },
  cardContainerContactTerminated: {
    borderColor: "transparent",
    backgroundColor: "#E6E6E6",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    fontStyle: "italic",
  },
  cardDescriptionTextUserInputAwaited: {
    color: "#002A38",
  },
  cardDescriptionTextAiInputAwaited: {
    color: "#002A38",
  },
  cardDescriptionTextContactTerminated: {
    color: "#ABB0BC",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatBubbleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    padding: 16,
    borderRadius: 8,
    width: "100%",
    flex: 1,
    transform: [
      {
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    ],
  },
  userChatBubble: {
    backgroundColor: "#233640",
  },
  gptChatBubble: {
    backgroundColor: "#3c77e833",
  },
  chatBubbleText: {
    color: "#FFF",
  },
  outlinedGptChatBubble: {
    borderWidth: 2,
    borderColor: "#3C77E8",
  },
});

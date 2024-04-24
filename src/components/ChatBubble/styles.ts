import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";

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
  },
  userChatBubble: {
    backgroundColor: colorTokens.colorBackgroundAlternativeCardBg2,
  },
  gptChatBubble: {
    backgroundColor: colorTokens.colorBackgroundAlternativeCardBg,
  },
  chatBubbleText: {
    color: "#FFF",
  },
  outlinedGptChatBubble: {
    borderWidth: 2,
    borderColor: colorTokens.colorBorderBrand,
  },
  avatarContainer: { width: 30, height: 30 },
  avatarEmpty: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000000",
  },
});

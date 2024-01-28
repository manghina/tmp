import { memo } from "react";
import { useChatBubble } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { styles } from "./styles";
import SweepCircleSvg from "../SweepCircleSvg";

type ChatBubbleProps = {
  outline?: boolean;
  sender: "user" | "gpt";
  text: string;
};

export const ChatBubble = memo(({ sender, text, outline }: ChatBubbleProps) => {
  const {} = useChatBubble(sender);

  return (
    <View
      style={[
        styles.chatBubbleContainer,
        sender === "gpt" ? styles.gptChatBubble : styles.userChatBubble,
        outline ? styles.outlinedGptChatBubble : undefined,
      ]}
    >
      <View style={{ width: 30, height: 30 }}>
        {sender === "gpt" ? (
          <SweepCircleSvg />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#000000",
            }}
          />
        )}
      </View>
      <Text flex style={[styles.chatBubbleText]}>
        {text}
      </Text>
    </View>
  );
});

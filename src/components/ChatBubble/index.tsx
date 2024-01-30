import { memo } from "react";
import { useChatBubble } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { styles } from "./styles";
import SweepCircleSvg from "../SweepCircleSvg";
import { IMessage } from "../../models/Message";

type ChatBubbleProps = {
  outline?: boolean;
  message: IMessage;
};

export const ChatBubble = memo(({ message, outline }: ChatBubbleProps) => {
  const {} = useChatBubble();

  return (
    <View
      style={[
        styles.chatBubbleContainer,
        message.role === "assistant"
          ? styles.gptChatBubble
          : styles.userChatBubble,
        outline ? styles.outlinedGptChatBubble : undefined,
      ]}
    >
      <View style={{ width: 30, height: 30 }}>
        {message.role === "assistant" ? (
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
        {message.text}
      </Text>
    </View>
  );
});

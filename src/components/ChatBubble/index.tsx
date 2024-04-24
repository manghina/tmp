import { memo } from "react";
import { useChatBubble } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { styles } from "./styles";
import SweepCircleSvg from "../SweepCircleSvg";
import { IMessage } from "@app/models/Message";
import { Avatar } from "@app/components/Avatar";

type ChatBubbleProps = {
  outline?: boolean;
  message: IMessage;
};

export const ChatBubble = memo(({ message, outline }: ChatBubbleProps) => {
  const { me } = useChatBubble();

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
      <View style={styles.avatarContainer}>
        {message.role === "assistant" ? (
          <SweepCircleSvg />
        ) : me ? (
          <Avatar data={me} />
        ) : (
          <View style={styles.avatarEmpty} />
        )}
      </View>
      <Text flex style={[styles.chatBubbleText]}>
        {message.text}
      </Text>
    </View>
  );
});

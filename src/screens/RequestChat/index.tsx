import { memo } from "react";
import {
  Colors,
  Text,
  TextField,
  TouchableOpacity,
  View,
} from "react-native-ui-lib";
import { useRequestChatScreen } from "./index.hooks";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { colorTokensDark } from "@app/theme/colors/tokens";
import moment from "moment";
import { ChatBubble } from "@app/components/ChatBubble";
import SendMessageSvg from "@app/components/SendMessageSvg";
import { ChatStatus } from "@app/models/Request";
import { TypingIndicator } from "../../components/TypingIndicator";

type RequestChatProps = {};
export const RequestChatScreen = memo(({}: RequestChatProps) => {
  const {
    isLoading,
    scrollViewRef,
    currentRequest,
    messages,
    onUserMessageSendButtonClicked,
    userInput,
    setUserInput,
  } = useRequestChatScreen();

  const renderTimingInfo = () => (
    <View
      flex
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        paddingVertical: 16,
      }}
    >
      <Text
        color={Colors.grayText}
        style={{
          fontSize: 12,
        }}
      >
        {moment().format("DD MMM YYYY")}
      </Text>
      <Text
        color={Colors.grayText}
        style={{
          fontSize: 12,
        }}
      >
        {moment().format("hh:mm A")}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: colorTokensDark.colorBackgroundInformation,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ScrollView ref={scrollViewRef}>
        <View
          flex
          style={{
            flexDirection: "column",
            gap: 8,
            paddingTop: 32,
            paddingHorizontal: 16,
          }}
        >
          {renderTimingInfo()}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingBottom: 8,
            }}
          >
            {!isLoading && (
              <>
                {messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    message={message}
                    outline={
                      message.role === "assistant" &&
                      index === messages.length - 1
                    }
                  />
                ))}
                {currentRequest?.chatStatus === ChatStatus.PROCESSING && (
                  <TypingIndicator />
                )}
              </>
            )}
            {isLoading && (
              <View>
                <Text Title>Loading...</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {(currentRequest === null ||
        currentRequest?.chatStatus === ChatStatus.WAITING_USER_INPUT) && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: 8,
              gap: 8,
              backgroundColor: "#023440",
            }}
          >
            <View flex>
              <TextField
                value={userInput}
                onChangeText={setUserInput}
                multiline
                numberOfLines={4}
                fieldStyle={{
                  width: "100%",
                  minHeight: 20,
                  maxHeight: 80,
                }}
                containerStyle={{
                  width: "100%",
                  backgroundColor: "rgba(254, 254, 254, 0.10)",
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                }}
                style={{
                  color: "#FFF",
                  fontSize: 16,
                }}
              />
            </View>
            <TouchableOpacity
              disabled={!userInput}
              onPress={onUserMessageSendButtonClicked}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  paddingTop: 6,
                  paddingRight: 6,
                  paddingBottom: 4,
                  paddingLeft: 4,
                  borderRadius: 8,
                  backgroundColor: userInput ? "#3C77E8" : "#6784BD",
                }}
              >
                <SendMessageSvg color={userInput ? "#FFF" : "#ABB0BC"} />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
});

RequestChatScreen.displayName = "RequestChatScreen";

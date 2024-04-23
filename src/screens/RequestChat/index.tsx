import React from "react";
import { Text, TextField, View } from "react-native-ui-lib";
import { useRequestChatScreen } from "./index.hooks";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import moment from "moment";
import { ChatBubble } from "@app/components/ChatBubble";
import SendMessageSvg from "@app/components/SendMessageSvg";
import { ChatStatus } from "@app/models/Request";
import { TypingIndicator } from "@app/components/TypingIndicator";
import { styles } from "./styles";
import { colorTokens } from "@app/theme/colors/tokens";

type RequestChatProps = {};
export const RequestChatScreen = ({}: RequestChatProps) => {
  const {
    isLoading,
    writingDisabled,
    scrollViewRef,
    currentRequest,
    messages,
    onUserMessageSendButtonClicked,
    userInput,
    setUserInput,
  } = useRequestChatScreen();

  const renderTimingInfo = () => (
    <View flex style={styles.timingContainer}>
      <Text style={styles.timingText}>{moment().format("DD MMM YYYY")}</Text>
      <Text style={styles.timingText}>{moment().format("hh:mm A")}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView ref={scrollViewRef}>
        <View flex style={styles.mainContainer}>
          {renderTimingInfo()}
          <View style={styles.chatContainer}>
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
          <View style={styles.userInputContainer}>
            <View flex>
              <TextField
                value={userInput}
                onChangeText={setUserInput}
                editable={!writingDisabled}
                multiline
                numberOfLines={4}
                fieldStyle={styles.inputStyle}
                containerStyle={styles.inputWrapperStyle}
                style={[
                  styles.textField,
                  writingDisabled && styles.textFieldDisabled,
                ]}
              />
            </View>
            <Pressable
              disabled={!userInput || writingDisabled}
              onPress={onUserMessageSendButtonClicked}
            >
              <View
                style={[
                  styles.sendButtonContainer,
                  userInput && !writingDisabled
                    ? styles.sendButtonActive
                    : styles.sendButtonDisabled,
                ]}
              >
                {writingDisabled ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <SendMessageSvg
                    color={
                      userInput && !writingDisabled
                        ? colorTokens.colorIconInverse
                        : colorTokens.colorIconAlternativeDisabled
                    }
                  />
                )}
              </View>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

RequestChatScreen.displayName = "RequestChatScreen";
RequestChatScreen.RouteName = "requests/chat" as const;

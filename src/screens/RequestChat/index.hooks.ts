import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ScrollView } from "react-native";
import { actions, selectors } from "@app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { IMessage } from "@app/models/Message";
import { ChatStatus } from "@app/models/Request";

export const useRequestChatScreen = () => {
  const dispatch = useDispatch();

  const currentRequest = useSelector(selectors.getCurrentRequest);
  const isCreatingRequest = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.postUsersMeRequests.api),
  );
  const isSendingMessage = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.postUsersMeRequestsMessagesByRequestId.api,
    ),
  );
  const isFetchingRequest = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getUsersMeRequestsByRequestId.api),
  );

  const scrollViewRef = useRef<ScrollView>(null);

  const [userInput, setUserInput] = useState("");

  const onUserMessageSendButtonClicked = useCallback(() => {
    dispatch(actions.messageSubmitted(userInput));
  }, [dispatch, userInput, setUserInput, currentRequest?._id]);

  const messages: Array<IMessage> = useMemo(() => {
    return [
      {
        role: "assistant",
        text: "Salve Antonio, sono qui per assisterti! Se hai bisogno di trovare un medico specialista, posso aiutarti. Per iniziare potresti fornirmi alcune informazioni? Avrei bisogno di sapere per chi è la prestazione medica (te stesso o qualcun altro), i sintomi che stai riscontrando, il luogo esatto in cui stai cercando lo specialista e l'urgenza della visita.",
      },
      ...(currentRequest?.messages ?? []),
    ];
  }, [currentRequest?.messages]);

  const isLoading = useMemo(
    () => isFetchingRequest && messages.length === 1,
    [isFetchingRequest, messages?.length],
  );

  const writingDisabled = useMemo(
    () => isLoading || isCreatingRequest || isSendingMessage,
    [isLoading, isCreatingRequest, isSendingMessage],
  );

  useEffect(() => {
    if (currentRequest?.chatStatus === ChatStatus.PROCESSING ?? false) {
      dispatch(actions.startPollingRequest());
    } else {
      dispatch(actions.stopPollingRequest());
    }

    return () => {
      dispatch(actions.stopPollingRequest());
    };
  }, [dispatch, currentRequest?.chatStatus]);

  useEffect(() => {
    if (!writingDisabled) {
      setUserInput("");
    }
  }, [writingDisabled]);

  useLayoutEffect(() => {
    if (currentRequest && messages?.length > 1 && scrollViewRef.current) {
      setTimeout(() => {
        if (messages?.length > 1 && scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      }, 20);
    }
  }, [scrollViewRef.current, messages?.length]);

  return {
    isLoading,
    writingDisabled,
    scrollViewRef,
    currentRequest,
    messages,
    onUserMessageSendButtonClicked,
    userInput,
    setUserInput,
  };
};

import { useCallback, useEffect, useState } from "react";
import { actions, selectors } from "@app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { RequestStatus } from "../../models/Request";

export const useRequestChatScreen = () => {
  const dispatch = useDispatch();

  const currentRequest = useSelector(selectors.getCurrentRequest);

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<
    {
      _id: string;
      sender: "user" | "gpt";
      text: string;
    }[]
  >([
    {
      _id: "1",
      sender: "gpt",
      text: "Salve Antonio, sono qui per assisterti! Se hai bisogno di trovare un medico specialista, posso aiutarti. Per iniziare potresti fornirmi alcune informazioni? Avrei bisogno di sapere per chi è la prestazione medica (te stesso o qualcun altro), i sintomi che stai riscontrando, il luogo esatto in cui stai cercando lo specialista e l'urgenza della visita.",
    },
  ]);

  const onUserMessageSendButtonClicked = useCallback(() => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        _id: `${prevMessages.length + 1}`,
        sender: "user",
        text: userInput,
      },
    ]);

    dispatch(actions.messageSubmitted(userInput));

    setUserInput("");
  }, [dispatch, userInput, setUserInput, setMessages]);

  useEffect(() => {
    if (currentRequest ?? false) {
      dispatch(actions.startPollingRequest());
    } else {
      dispatch(actions.stopPollingRequest());
    }

    return () => {
      dispatch(actions.stopPollingRequest());
    };
  }, [dispatch]);

  return { messages, onUserMessageSendButtonClicked, userInput, setUserInput };
};

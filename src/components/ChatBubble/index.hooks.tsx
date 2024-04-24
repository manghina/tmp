import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useChatBubble = () => {
  const me = useSelector(selectors.getMe);

  return { me };
};

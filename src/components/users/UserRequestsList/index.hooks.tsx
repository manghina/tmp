import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useUserRequestsList = () => {
  const requestsList = useSelector(selectors.getRequestsList);

  return { requestsList };
};

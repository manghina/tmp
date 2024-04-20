import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import { RequestChatScreen } from "@app/screens/RequestChat";

export const useUserHomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);
  const requestsList = useSelector(selectors.getRequestsList);

  const onSweepNowButtonPressed = useCallback(() => {
    dispatch(actions.setCurrentRequest(null));
    navigation.navigate(RequestChatScreen.RouteName);
  }, [dispatch, navigation]);

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return { me, requestsList, onSweepNowButtonPressed };
};

import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

export const useUserHomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me = useSelector(selectors.getUserMe);
  const requestsList = useSelector(selectors.getRequestsList);

  const onSweepNowButtonPressed = useCallback(() => {
    dispatch(actions.setCurrentRequest(null));
    navigation.navigate("requests/chat");
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!me) {
      navigation.replace("Login");
    }
  }, [me, navigation]);

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return { me, requestsList, onSweepNowButtonPressed };
};

import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useUserHomeScreen = () => {
  const navigation = useNavigation<any>();

  const me = useSelector(selectors.getUserMe);
  const requestsList = useSelector(selectors.getRequestsList);

  useEffect(() => {
    if (!me) {
      navigation.replace("Login");
    }
  }, [me, navigation]);

  return { me, requestsList };
};

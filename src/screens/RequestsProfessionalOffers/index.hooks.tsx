import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "@app/redux-store";

export const useRequestProfessionalOffersScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const onBackButtonPress = useCallback(() => {
    dispatch(actions.setCurrentRequest(null));
    navigate.goBack();
  }, [dispatch, navigate]);

  return { onBackButtonPress };
};

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "@app/redux-store";

const pageDescription = `Sto analizzando in tempo reale migliaia di informazioni per trovare il professionista ideale per la tua esigenza.

A breve troverai qui sotto le proposte perfette per te con relativi orari e onorari dei medici disponibili.

Riceverai una notifica al termine della ricerca.`;

export const useRequestSearchProfessionalsScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const onBackButtonPress = useCallback(() => {
    dispatch(actions.setCurrentRequest(null));
    navigate.goBack();
  }, [dispatch, navigate]);

  return { onBackButtonPress, pageDescription };
};

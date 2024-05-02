import { useEffect, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import { LoginScreen } from "@app/screens/Login";

import { userFaqs } from "./user-entries";
import { docFaqs } from "./doc-entries";

type FaqMenu = {
  title: string;
  label: string;
}[];

export const useFaqScreen = () => {
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);
  const account = useSelector(selectors.getAccount);
  
  const faqItems: FaqMenu =  account?.type == "user" ?
  useMemo(
    () => userFaqs,
    [navigation],
  ) :
  useMemo(
    () => docFaqs,
    [navigation],
  );

  useEffect(() => {
    if (!me) {
      navigation.replace(LoginScreen.RouteName);
    }
  }, [me, navigation]);


  return { me, faqItems };
};

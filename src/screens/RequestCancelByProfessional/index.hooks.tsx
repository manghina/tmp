import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const useRequestCancelByProfessional = () => {
  const navigation = useNavigation<any>();

  const [radioValues, setRadioValues] = useState({
    option1: true,
    option2: false,
  });

  const handleRadioChange = (value) => {
    setRadioValues({
      option1: value === "option1",
      option2: value === "option2",
    });
  };

  const [textValue, setTextValue] = useState<string>("");

  const goBack = useCallback(() => {
    navigation.pop();
  }, []);

  const handleDeleteRequest = useCallback(() => {
    console.log("delete request: ", { radioValues, textValue });
  }, [radioValues, textValue]);

  return {
    handleDeleteRequest,
    goBack,
    radioValues,
    textValue,
    setTextValue,
    handleRadioChange,
  };
};

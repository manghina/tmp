import { useCallback, useState } from "react";

export const useRequestCancelByProfessional = () => {
  const goBack = useCallback(() => {
    console.log("go back");
  }, []);

  const handleDeleteRequest = useCallback(() => {
    console.log("delete request");
  }, []);

  const [radioValues, setRadioValues] = useState<boolean[]>([true, false]);
  const [textValue, setTextValue] = useState<string>("");

  return {
    handleDeleteRequest,
    goBack,
    radioValues,
    setRadioValues,
    textValue,
    setTextValue,
  };
};

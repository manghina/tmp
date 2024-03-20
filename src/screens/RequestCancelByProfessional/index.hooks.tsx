import { useCallback, useState } from "react";

export const useRequestCancelByProfessional = () => {
  const goBack = useCallback(() => {
    console.log("go back");
  }, []);

  const handleDeleteRequest = useCallback(() => {
    console.log("delete request");
  }, []);

  const [radioValues, setRadioValues] = useState<boolean[]>([true, false]);

  return { handleDeleteRequest, goBack, radioValues, setRadioValues };
};

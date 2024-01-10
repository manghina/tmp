import { useState } from "react";

export const useRegisterScreen = () => {
  const [stepperCounter, setStepperCounter] = useState(1);
  const [registrationProgressLine, setregistrationProgressLine] = useState(0);
  const [dateInitialized, setDateInitialized] = useState(false);
  const [datePicked, setDatePicked] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isFocused, setIsFocused] = useState({
    nome: false,
    cognome: false,
    datanascita: false,
  });

  const handleInputFocus = (textinput: string) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [textinput]: true,
    }));
  };

  const handleInputBlur = (textinput: string) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [textinput]: false,
    }));
  };

  return {
    stepperCounter,
    setStepperCounter,
    registrationProgressLine,
    isFocused,
    handleInputFocus,
    handleInputBlur,
    dateInitialized,
    setDateInitialized,
    openDatePicker,
    setOpenDatePicker,
    datePicked,
    setDatePicked,
  };
};

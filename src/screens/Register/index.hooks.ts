import { useEffect, useState } from "react";

export const useRegisterScreen = () => {
  const [stepperCounter, setStepperCounter] = useState(1);
  const [registrationProgressLine1, setRegistrationProgressLine1] = useState(0);
  const [dateInitialized, setDateInitialized] = useState(false);
  const [datePicked, setDatePicked] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isFocused, setIsFocused] = useState({
    nome: false,
    cognome: false,
    datanascita: false,
  });
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [dataNascita, setDataNascita] = useState("");

  useEffect(() => {
    calculateRegistrationProgressLine1();
  }, [nome, cognome, dataNascita]);

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

  function calculateRegistrationProgressLine1() {
    let filledInputs = 0;

    if (nome.trim() !== "") {
      filledInputs++;
    }

    if (cognome.trim() !== "") {
      filledInputs++;
    }

    if (dataNascita.trim() !== "") {
      filledInputs++;
    }

    setRegistrationProgressLine1(filledInputs);
  }

  return {
    stepperCounter,
    setStepperCounter,
    registrationProgressLine1,
    setRegistrationProgressLine1,
    isFocused,
    handleInputFocus,
    handleInputBlur,
    dateInitialized,
    setDateInitialized,
    openDatePicker,
    setOpenDatePicker,
    datePicked,
    setDatePicked,
    nome,
    setNome,
    cognome,
    setCognome,
    dataNascita,
    setDataNascita,
    calculateRegistrationProgressLine1,
  };
};

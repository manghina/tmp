import { useEffect, useState } from "react";

export const useRegisterScreen = () => {
  const [stepperCounter, setStepperCounter] = useState(1);
  const [registrationProgressLine1, setRegistrationProgressLine1] = useState(0);
  const [registrationProgressLine2, setRegistrationProgressLine2] = useState(0);
  const [dateInitialized, setDateInitialized] = useState(false);
  const [datePicked, setDatePicked] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isFocused, setIsFocused] = useState({
    nome: false,
    cognome: false,
    datanascita: false,
    email: false,
    password: false,
    confermaPassword: false,
  });
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [dataNascita, setDataNascita] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");

  useEffect(() => {
    calculateRegistrationProgressLine1();
  }, [nome, cognome, dataNascita]);

  useEffect(() => {
    calculateRegistrationProgressLine2();
  }, [email, password, confermaPassword]);

  useEffect(() => {
    setIsFocused({
      nome: false,
      cognome: false,
      datanascita: false,
      email: false,
      password: false,
      confermaPassword: false,
    });
  }, [stepperCounter]);

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

  function calculateRegistrationProgressLine2() {
    let filledInputs = 0;

    if (email.trim() !== "") {
      filledInputs++;
    }

    if (password.trim() !== "") {
      filledInputs++;
    }

    if (confermaPassword.trim() !== "") {
      filledInputs++;
    }

    setRegistrationProgressLine2(filledInputs);
  }

  return {
    stepperCounter,
    setStepperCounter,
    registrationProgressLine1,
    setRegistrationProgressLine1,
    registrationProgressLine2,
    setRegistrationProgressLine2,
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
    email,
    setEmail,
    password,
    setPassword,
    confermaPassword,
    setConfermaPassword,
    calculateRegistrationProgressLine1,
  };
};

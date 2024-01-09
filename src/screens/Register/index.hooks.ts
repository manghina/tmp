import { useState } from "react";

export const useRegisterScreen = () => {
  const [stepperCounter, setStepperCounter] = useState(1);
  const [registrationProgressLine, setregistrationProgressLine] = useState(0);

  return {
    stepperCounter,
    setStepperCounter,
    registrationProgressLine,
  };
};

import { useState } from "react";

export const useCustomRadioButton = () => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return { selected, handlePress };
};

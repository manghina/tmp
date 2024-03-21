import { useState } from "react";

export const useAppRadioButton = () => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return { selected, handlePress };
};

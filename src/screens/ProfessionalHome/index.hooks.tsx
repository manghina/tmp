import { useState } from "react";

export const useProfessionalHomeScreen = () => {
  const [selectedHistoryBox, setSelectedHistoryBox] = useState("30G");

  return { selectedHistoryBox, setSelectedHistoryBox };
};

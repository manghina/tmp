import { useSelector } from "react-redux";
import { selectors } from "../../redux-store";
import { useMemo } from "react";

export const useCustomToast = () => {
  const isToastVisible = useSelector(selectors.getFeedbackOpen);
  const feedbackType = useSelector(selectors.getFeedbackType);
  const toastMessage = useSelector(selectors.getFeedbackMessage);

  const { backgroundColor, color, iconColor } = useMemo(() => {
    switch (feedbackType) {
      case "success":
        return {
          backgroundColor: "#efffef",
          color: "#094900",
          iconColor: "#10bb00",
        };
      case "warning":
        return {
          backgroundColor: "#ffefde",
          color: "#4b3100",
          iconColor: "#ffb700",
        };
      case "error":
        return {
          backgroundColor: "#ffe7e7",
          color: "#570000",
          iconColor: "#bd0000",
        };
      case "info":
        return {
          backgroundColor: "#e1e4ff",
          color: "#00084d",
          iconColor: "#3c77e8",
        };
      default:
        return { backgroundColor: "#FFF", color: "#000", iconColor: "#000" };
    }
  }, [feedbackType]);

  return {
    isToastVisible,
    toastMessage,
    backgroundColor,
    color,
    iconColor,
    feedbackType,
  };
};

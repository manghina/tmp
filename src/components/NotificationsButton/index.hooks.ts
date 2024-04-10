import { useCallback } from "react";

export const useNotificationsButton = () => {
  const onNotificationsButtonPressed = useCallback(() => {
    console.log("NotificationsButton pressed");
  }, []);

  return {
    onNotificationsButtonPressed,
  };
};

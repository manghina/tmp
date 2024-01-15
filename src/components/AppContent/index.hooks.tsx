import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "@app/redux-store";

export const useAppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.appStartup());
  }, [dispatch]);

  return {};
};

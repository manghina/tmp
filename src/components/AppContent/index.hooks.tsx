import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "@app/redux-store";

// Set moment locale to it
import "moment/locale/it";
import moment from "moment";
moment.locale("it");

export const useAppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.appStartup());
  }, [dispatch]);

  return {};
};

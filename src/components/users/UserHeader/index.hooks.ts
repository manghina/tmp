import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useMemo } from "react";

export const useUserHeader = () => {
  const me = useSelector(selectors.getUserMe);

  const initials = useMemo(
    () =>
      !me
        ? undefined
        : `${me.name.charAt(0)}${me.lastname.charAt(0)}`.toUpperCase(),
    [me],
  );

  return { initials };
};

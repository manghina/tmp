import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { useMemo } from "react";
import { User } from "@app/models/User";

export const useUserHeader = () => {
  const me: User | null = useSelector(selectors.getMe);

  const initials = useMemo(
    () =>
      !me
        ? undefined
        : `${me.name.charAt(0)}${me.lastName.charAt(0)}`.toUpperCase(),
    [me],
  );

  return { initials };
};

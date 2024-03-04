import { useCallback, useState } from "react";

export const useBaseTextField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  return {
    isFocused,
    onFocus,
    onBlur,
  };
};

import { useCallback, useEffect, useRef, useState } from "react";
import { TextFieldRef } from "react-native-ui-lib";

export const useBaseTextField = (focus?: boolean) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const inputRef = useRef<TextFieldRef | null>(null);

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
    } else if (focus === false) {
      inputRef.current?.blur();
    }
  }, [focus]);

  return {
    isFocused,
    onFocus,
    onBlur,
    inputRef,
  };
};

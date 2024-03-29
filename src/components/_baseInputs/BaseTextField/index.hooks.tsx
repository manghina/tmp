import { useCallback, useRef, useState } from "react";
import { TextFieldRef } from "react-native-ui-lib";

export const useBaseTextField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const inputRef = useRef<TextFieldRef | null>(null);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return {
    isFocused,
    onFocus,
    onBlur,
    inputRef,
    handleFocus,
  };
};

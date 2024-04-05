import { useCallback, useEffect, useRef, useState } from "react";
import { TextFieldRef } from "react-native-ui-lib";

export const useBaseTextField = ({
  focus,
  blur,
}: {
  focus?: boolean;
  blur?: boolean;
}) => {
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
    }
  }, [focus]);

  useEffect(() => {
    if (blur) {
      inputRef.current?.blur();
    }
  }, [blur]);

  return {
    isFocused,
    onFocus,
    onBlur,
    inputRef,
  };
};

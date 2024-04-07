import { useRef, useMemo, useCallback, useEffect } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useBottomSheet = ({ visible }: { visible?: boolean }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["94%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useEffect(() => {
    if (visible) {
      handlePresentModalPress();
    } else {
      handleCloseModalPress();
    }
  }, [visible]);

  return {
    bottomSheetModalRef,
    snapPoints,
  };
};

import { FC, PropsWithChildren, memo } from "react";
import { Button } from "react-native-ui-lib";
import CloseIcon from "@app/components/SvgIcons/CloseIcon";
import { styles } from "./style";

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { useBottomSheet } from "./index.hooks";

type BottomSheetProps = {
  visible: boolean;
  showCloseButton?: boolean;
  handleColor?: string;
} & Omit<BottomSheetModalProps, "children">;

export const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = memo(
  ({
    onDismiss,
    showCloseButton = true,
    children,
    visible,
    handleColor,
    snapPoints = ["94%"],
  }) => {
    const { bottomSheetModalRef } = useBottomSheet({ visible });

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          onDismiss={onDismiss}
          style={styles.mainContainer}
          handleStyle={styles.handleContainer}
          handleIndicatorStyle={{
            ...styles.handleIndicator,
            ...(handleColor ? { backgroundColor: handleColor } : {}),
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            {showCloseButton && (
              <Button round style={styles.closeButton} onPress={onDismiss}>
                <CloseIcon color={styles.closeIcon.color} />
              </Button>
            )}
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

BottomSheet.displayName = "BottomSheet";

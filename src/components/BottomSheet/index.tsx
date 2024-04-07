import { memo } from "react";
import { Button, Modal, ModalProps, Text, View } from "react-native-ui-lib";
import CloseIcon from "@app/components/SvgIcons/CloseIcon";
import { styles } from "./style";

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useBottomSheet } from "./index.hooks";

type BottomSheetProps = {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
  handleColor?: string;
};

export const BottomSheet = memo(
  ({
    onClose,
    showCloseButton = true,
    children,
    visible,
    handleColor,
  }: BottomSheetProps) => {
    const { bottomSheetModalRef, snapPoints } = useBottomSheet({ visible });

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          onDismiss={onClose}
          containerStyle={styles.mainContainer}
          handleStyle={styles.handleContainer}
          handleIndicatorStyle={{
            ...styles.handleIndicator,
            ...(handleColor ? { backgroundColor: handleColor } : {}),
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            {showCloseButton && (
              <Button round style={styles.closeButton} onPress={onClose}>
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

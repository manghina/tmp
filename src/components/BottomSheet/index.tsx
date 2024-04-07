import { memo } from "react";
import { Button, Modal, ModalProps, View } from "react-native-ui-lib";
import CloseIcon from "@app/components/SvgIcons/CloseIcon";
import { styles } from "./style";

type BottomSheetProps = {
  manualClose?: () => void;
  showCloseButton?: boolean;
} & ModalProps;

export const BottomSheet = memo(
  ({
    manualClose,
    showCloseButton = true,
    children,
    ...props
  }: BottomSheetProps) => {
    return (
      <Modal presentationStyle="pageSheet" animationType="slide" {...props}>
        <View style={styles.topContainer}>
          <View style={styles.rectangle} />
          {showCloseButton && (
            <Button round style={styles.closeButton} onPress={manualClose}>
              <CloseIcon color={styles.closeIcon.color} />
            </Button>
          )}
        </View>
        {children}
      </Modal>
    );
  },
);

BottomSheet.displayName = "BottomSheet";

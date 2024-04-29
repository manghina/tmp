import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurfaceAlternative,
    justifyContent: "space-between",
  },
  mainContainer: {
    flexDirection: "column",
    gap: dimensionsTokens.padding3Xs,
    paddingHorizontal: dimensionsTokens.padding3Xs,
  },
  timingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  timingText: {
    ...textVariants.p3MediumNormal,
    color: colorTokens.colorTextAlternativeSubtle,
  },
  chatContainer: {
    gap: dimensionsTokens.padding3Xs,
    paddingBottom: dimensionsTokens.padding3Xs,
  },
  userInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: dimensionsTokens.padding3Xs,
    gap: dimensionsTokens.padding3Xs,
    backgroundColor: colorTokens.colorBackgroundAlternativeTextInputBox,
  },
  inputWrapperStyle: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundAlternativeTextInput,
    borderRadius: 8,
    paddingHorizontal: dimensionsTokens.padding3Xs,
    paddingVertical: dimensionsTokens.padding3_5Xs,
  },
  inputStyle: {
    width: "100%",
    minHeight: 20,
    maxHeight: 80,
  },
  textField: {
    ...textVariants.p1MediumItalic,
    color: colorTokens.colorTextAlternativeDefault,
  },
  textFieldDisabled: {
    color: colorTokens.colorTextDisabled,
  },
  sendButtonContainer: {
    width: 32,
    height: 32,
    paddingTop: dimensionsTokens.padding3_5Xs,
    paddingRight: dimensionsTokens.padding3_5Xs,
    paddingBottom: dimensionsTokens.padding4Xs,
    paddingLeft: dimensionsTokens.padding4Xs,
    borderRadius: 8,
  },
  sendButtonActive: {
    backgroundColor: "#3C77E8",
  },
  sendButtonDisabled: {
    backgroundColor: "#6784BD",
  },
});

import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const userHomeStyles = StyleSheet.create({
  graphicsMainContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  graphicsRelativeContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  graphicsRightBlob: {
    position: "absolute",
    borderRadius: 1000,
    width: "70%",
    aspectRatio: 1,
    right: "-40%",
    top: "20%",
    backgroundColor: "rgba(221, 222, 222, 0.5)",
  },
  graphicsLeftBlob: {
    position: "absolute",
    borderRadius: 1000,
    width: "70%",
    aspectRatio: 1,
    left: "-40%",
    bottom: "20%",
    backgroundColor: "rgba(221, 222, 222, 0.5)",
  },
  graphicsSweepCircle3: {
    position: "absolute",
    borderRadius: 1000,
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "rgba(221, 222, 222, 0.25)",
  },
  graphicsSweepCircle2: {
    position: "absolute",
    borderRadius: 1000,
    width: "90%",
    aspectRatio: 1,
    backgroundColor: "rgba(221, 222, 222, 0.50)",
  },
  graphicsSweepCircle1: {
    position: "absolute",
    borderRadius: 1000,
    width: "80%",
    aspectRatio: 1,
    backgroundColor: "rgba(221, 222, 222, 0.50)",
  },
  graphicsSweepCircle0: {
    position: "absolute",
    borderRadius: 1000,
    width: "70%",
    aspectRatio: 1,
    backgroundColor: "#DBDCDC",
  },
  safeAreaView: {
    height: "100%",
  },
  mainViewContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    padding: dimensionsTokens.paddingSm,
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  greetingsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  greetingsTitle: { ...textVariants.h3CondensedBlackNormal },
  pageSubtitleText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  bottomActionsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  secondaryActionsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
});

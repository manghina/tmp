import { StyleSheet } from "react-native";

export const userProfileStyles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "#fff",
  },
  mainViewContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    height: "100%",
  },
  profileInfoContainer: {
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
  },
  profileImageContainer: {
    width: 110,
    height: 110,
    position: "relative",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: "#DBDCDC",
    overflow: "hidden",
  },
  profileInfoText: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  editImageButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    backgroundColor: "#44546F",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 5,
  },
  menuContainer: {
    flexDirection: "column",
    gap: 10,
  },
  menuCategory: {
    flexDirection: "column",
  },
  menuCategoryList: {
    flexDirection: "column",
    gap: 8,
  },
  menuItem: {
    backgroundColor: "rgb(239, 241, 243)",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

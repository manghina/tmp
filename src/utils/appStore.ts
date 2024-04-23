import * as StoreReview from "expo-store-review";
import { Linking, Platform } from "react-native";

export const handleRequestReview = async () => {
  if (await StoreReview.hasAction()) {
    if (await StoreReview.isAvailableAsync()) {
      console.log(StoreReview.storeUrl());
      await StoreReview.requestReview();
    }
  }
};

export const reviewInAppStore = () => {
  switch (Platform.OS) {
    case "ios":
      Linking.openURL(
        "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id6479641704?action=write-review",
      );
      break;
    case "android":
      Linking.openURL(
        "market://details?id=ai.sweepit.sweep&showAllReviews=true",
      );
      break;
    default:
      break;
  }
};

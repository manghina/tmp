import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";

export const useAvatar = () => {
  const isUploadingMedia = useSelector(selectors.getIsUploadingMedia);

  return { isUploadingMedia };
};

import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import { Image, Text, View } from "react-native-ui-lib";
import { styles } from "./styles";
import { useAvatar } from "./index.hooks";

type AvatarProps<T> = {
  data: T;
  size?: "small" | "large";
};

export const Avatar = memo(
  <T extends { name: string; lastName: string; profilePictureUrl?: string }>({
    data: { name, lastName, profilePictureUrl },
    size = "small",
  }: AvatarProps<T>) => {
    const { isUploadingMedia } = useAvatar();

    return isUploadingMedia ? (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : profilePictureUrl ? (
      <Image style={styles.profileImage} source={{ uri: profilePictureUrl }} />
    ) : (
      <View style={[styles.profileImage, styles.profileImageTextContainer]}>
        <Text
          style={[
            styles.profileImageText,
            size === "small"
              ? styles.profileImageTextSmall
              : styles.profileImageTextLarge,
          ]}
        >
          {name[0]}
          {lastName[0]}
        </Text>
      </View>
    );
  },
);

Avatar.displayName = "Avatar";

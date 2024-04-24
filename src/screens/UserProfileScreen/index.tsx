import React from "react";
import { useUserProfileScreen } from "./index.hooks";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { userProfileStyles } from "./styles";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/components/SvgIcons/EditImageIcon";
import { Avatar } from "@app/components/Avatar";

export const UserProfileScreen = () => {
  const {
    isUploadingMedia,
    me,
    uploadedImage,
    profileMenuItems,
    dialog,
    onImagePickerPressed,
  } = useUserProfileScreen();

  if (!me) {
    return <View />;
  }

  const renderProfileData = () => (
    <View style={userProfileStyles.profileInfoContainer}>
      <Pressable onPress={isUploadingMedia ? undefined : onImagePickerPressed}>
        <View
          style={[
            userProfileStyles.avatarContainer,
            !isUploadingMedia && !me?.profilePictureUrl
              ? userProfileStyles.accentBackground
              : undefined,
          ]}
        >
          <Avatar data={me} size="large" type="user" />
          <View style={userProfileStyles.editImageButton}>
            {uploadedImage ? (
              <EditImageIcon
                size={48}
                color={
                  isUploadingMedia ? colorTokens.colorIconDisabled : undefined
                }
              />
            ) : (
              <ImageIcon
                size={48}
                color={
                  isUploadingMedia ? colorTokens.colorIconDisabled : undefined
                }
              />
            )}
          </View>
        </View>
      </Pressable>
      <Text style={userProfileStyles.profileInfoText}>
        {me?.name} {me?.lastName}
      </Text>
    </View>
  );

  const renderMenu = () => (
    <>
      <View style={userProfileStyles.menuContainer}>
        {profileMenuItems.map(({ category, items }) => (
          <View key={category} style={userProfileStyles.menuCategory}>
            <Text style={userProfileStyles.menuCatergoryTitle}>{category}</Text>
            {items.map(({ icon, label, onPress }) => (
              <TouchableOpacity key={label} onPress={onPress}>
                <View style={userProfileStyles.menuItem}>
                  {icon}
                  <Text style={userProfileStyles.menuItemText}>{label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView style={userProfileStyles.safeAreaView}>
        <ScrollView style={userProfileStyles.scrollView}>
          {renderProfileData()}
          {renderMenu()}
          {dialog}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

UserProfileScreen.displayName = "UserProfileScreen";
UserProfileScreen.RouteName = "user-profile" as const;

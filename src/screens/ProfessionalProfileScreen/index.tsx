import React from "react";
import { useProfessionalProfileScreen } from "./index.hooks";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/components/SvgIcons/EditImageIcon";

export const ProfessionalProfileScreen = () => {
  const {
    isUploadingMedia,
    me,
    uploadedImage,
    profileMenuItems,
    dialog,
    onImagePickerPressed,
  } = useProfessionalProfileScreen();

  const renderProfileData = () => (
    <View style={styles.profileInfoContainer}>
      <Pressable onPress={isUploadingMedia ? undefined : onImagePickerPressed}>
        <View
          style={[
            styles.avatarContainer,
            !isUploadingMedia && !me?.profilePicture
              ? styles.accentBackground
              : undefined,
          ]}
        >
          {isUploadingMedia ? (
            <View style={styles.loadingIndicatorContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : me?.profilePicture ? (
            <Image
              style={styles.profileImage}
              source={{ uri: me.profilePicture.getUrlFromKeyAndExtension() }}
              width={50}
              height={50}
            />
          ) : (
            <View style={styles.profileImageTextContainer}>
              <Text style={styles.profileImageText}>
                {me?.name[0]}
                {me?.lastName[0]}
              </Text>
            </View>
          )}
          <View style={styles.editImageButton}>
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
      <Text style={styles.profileInfoText}>
        {me?.name} {me?.lastName}
      </Text>
    </View>
  );

  const renderMenu = () => (
    <>
      <View style={styles.menuContainer}>
        {profileMenuItems.map(({ category, items }) => (
          <View key={category} style={styles.menuCategory}>
            <Text style={styles.menuCatergoryTitle}>{category}</Text>
            {items.map(({ icon, label, onPress }, index) => (
              <TouchableOpacity key={index} onPress={onPress}>
                <View style={styles.menuItem}>
                  {icon}
                  <Text style={styles.menuItemText}>{label}</Text>
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
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          {renderProfileData()}
          {renderMenu()}
          {dialog}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

ProfessionalProfileScreen.displayName = "ProfessionalProfileScreen";
ProfessionalProfileScreen.RouteName = "professional-profile" as const;

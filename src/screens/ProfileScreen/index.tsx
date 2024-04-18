import React from "react";
import { useUserProfileScreen } from "./index.hooks";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { userProfileStyles } from "./styles";
import profilePicture from "@assets/img/doc15.png";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/screens/ProfileScreen/EditImageIcon";

export const UserProfileScreen = () => {
  const { me, profileMenuItems } = useUserProfileScreen();

  const renderProfileData = () => (
    <View style={userProfileStyles.profileInfoContainer}>
      <View style={userProfileStyles.profileImageContainer}>
        {profilePicture ? (
          <View style={userProfileStyles.profileImage}>
            <Image
              style={userProfileStyles.profileImage}
              source={profilePicture}
            />
          </View>
        ) : (
          <View style={userProfileStyles.profileImageTextContainer}>
            <Text style={userProfileStyles.profileImageText}>
              {me?.name[0]}
              {me?.lastName[0]}
            </Text>
          </View>
        )}
        <View style={userProfileStyles.editImageButton}>
          {profilePicture ? (
            <EditImageIcon />
          ) : (
            <ImageIcon color={colorTokens.colorIconInverse} />
          )}
        </View>
      </View>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

UserProfileScreen.displayName = "UserProfileScreen";
UserProfileScreen.RouteName = "user-settings" as const;

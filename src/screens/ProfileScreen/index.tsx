import React, { memo } from "react";
import { useUserProfileScreen } from "./index.hooks";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { userProfileStyles } from "./styles";
import profilePicture from "@assets/img/doc15.png";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/screens/ProfileScreen/EditImageIcon";

export const UserProfileScreen = memo(() => {
  const { me, profileMenuItems, handleLogout } = useUserProfileScreen();

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
      <View paddingT-20 style={userProfileStyles.menuContainer}>
        {profileMenuItems.map(({ category, items }, index) => (
          <TouchableOpacity key={category}>
            <View>
              <Text h6>{category}</Text>
              <View
                paddingT-15
                paddingB-15
                style={userProfileStyles.menuCategoryList}
              >
                {items.map(({ icon, label, onPress }) => (
                  <TouchableOpacity key={label} onPress={onPress}>
                    <View padding-12 style={userProfileStyles.menuItem}>
                      <View>{icon}</View>
                      <Text style={{ fontWeight: "600" }}>{label}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Button label="Logout" onPress={handleLogout} />
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
});

UserProfileScreen.displayName = "UserProfileScreen";

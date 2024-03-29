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
import BellIcon from "@app/components/SvgIcons/BellIcon";
import profilePicture from "@assets/img/doc15.png";

export const UserProfileScreen = memo(() => {
  const { me, profileMenuItems, handleLogout } = useUserProfileScreen();

  const renderProfileImage = () => (
    <View style={userProfileStyles.profileInfoContainer}>
      <View style={userProfileStyles.profileImageContainer}>
        <View style={userProfileStyles.profileImage}>
          <Image width={110} height={110} source={profilePicture} />
        </View>
        <View style={userProfileStyles.editImageButton}>
          <BellIcon color="#fff" />
        </View>
      </View>
      <Text h5 style={userProfileStyles.profileInfoText}>
        {me?.name} {me?.lastName}
      </Text>
    </View>
  );

  const renderPageContent = () => (
    <View padding-20 style={userProfileStyles.mainViewContainer}>
      {renderProfileImage()}
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
    </View>
  );

  return (
    <>
      <SafeAreaView style={userProfileStyles.safeAreaView}>
        <ScrollView style={{ height: "100%" }}>
          {renderPageContent()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

UserProfileScreen.displayName = "UserProfileScreen";

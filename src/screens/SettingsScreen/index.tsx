import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { userProfileStyles } from "./styles";
import profilePicture from "@assets/img/doc15.png";
import ImageIcon from "@app/components/SvgIcons/ImageIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import EditImageIcon from "@app/screens/ProfileScreen/EditImageIcon";
import { useSettingsProfileScreen } from "./index.hooks";

export const SettingsScreen = () => {
  const { me, profileMenuItems } = useSettingsProfileScreen();



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
          {renderMenu()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

SettingsScreen.displayName = "SettingsScreen";
SettingsScreen.RouteName = "settings" as const;

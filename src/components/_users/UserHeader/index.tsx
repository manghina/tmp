import { memo } from "react";
import { View } from "react-native-ui-lib";
import { useUserHeader } from "./index.hooks";
import { Pressable, SafeAreaView } from "react-native";
import { Avatar } from "@app/components/Avatar";
import { styles } from "./styles";
import SweepLogoSvg from "@app/components/SweepLogoSvg";
import { colorTokens } from "@app/theme/colors/tokens";

export const UserHeader = memo(({}) => {
  const { me, goToProfile } = useUserHeader();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Pressable onPress={goToProfile}>
        <View style={styles.headerRow}>
          <SweepLogoSvg size={32} color={colorTokens.colorTextDefault} />
          {me && (
            <View style={styles.avatarContainer}>
              <Avatar data={me} size="small" />
            </View>
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
});

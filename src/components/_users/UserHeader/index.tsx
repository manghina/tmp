import { memo } from "react";
import { View } from "react-native-ui-lib";
import { useUserHeader } from "./index.hooks";
import { Logo } from "@app/components/Logo";
import { Pressable, SafeAreaView } from "react-native";
import { Avatar } from "@app/components/Avatar";
import { styles } from "./styles";

export const UserHeader = memo(({}) => {
  const { me, goToProfile } = useUserHeader();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Pressable onPress={goToProfile}>
        <View style={styles.headerRow}>
          <Logo color="#000" />
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

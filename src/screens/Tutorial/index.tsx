import { Button, Text, View } from "react-native-ui-lib";
import { useTutorialScreen } from "./index.hooks";
import {
  Animated,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  defaultAnimatedBarStyles: {
    position: "absolute",
    width: 4,
    height: "100%",
    backgroundColor: "#3C77E8",
    borderRadius: 1,
    bottom: 0,
    transformOrigin: "bottom",
  },
});

export const TutorialScreen = () => {
  const {
    bgImage,
    subtitle,
    fill1Anim,
    fill2Anim,
    fill3Anim,
    onRegisterButtonClick,
    onLoginButtonClick,
    goto,
  } = useTutorialScreen();

  return (
    <ImageBackground source={bgImage}>
      <SafeAreaView
        style={{
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <View
          paddingH-25
          paddingV-25
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              Title
              style={{ fontStyle: "italic", fontWeight: "bold", color: "#FFF" }}
            >
              Sweep
            </Text>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <View>
                <View
                  style={{
                    width: 4,
                    height: 34,
                    backgroundColor: "#FFF",
                    borderRadius: 1,
                  }}
                />
                {/*Progress bar*/}
                <Animated.View
                  style={[
                    styles.defaultAnimatedBarStyles,
                    {
                      // Bind height to animated value
                      transform: [
                        {
                          scaleY: fill3Anim,
                        },
                      ],
                    },
                  ]}
                />
              </View>
              <View>
                <View
                  style={{
                    width: 4,
                    height: 34,
                    backgroundColor: "#FFF",
                    borderRadius: 1,
                  }}
                />
                {/*Progress bar*/}
                <Animated.View
                  style={[
                    styles.defaultAnimatedBarStyles,
                    {
                      // Bind height to animated value
                      transform: [
                        {
                          scaleY: fill2Anim,
                        },
                      ],
                    },
                  ]}
                />
              </View>
              <View>
                <View
                  style={{
                    width: 4,
                    height: 34,
                    backgroundColor: "#FFF",
                    borderRadius: 1,
                  }}
                />
                {/*Progress bar*/}
                <Animated.View
                  style={[
                    styles.defaultAnimatedBarStyles,
                    {
                      // Bind scale Y to animated value
                      transform: [
                        {
                          scaleY: fill1Anim,
                        },
                      ],
                    },
                  ]}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 24, color: "#FFF", fontWeight: "normal" }}>
              Prenota con facilità
            </Text>
            <Text style={{ fontSize: 32, color: "#FFF", fontWeight: "bold" }}>
              {subtitle}
            </Text>
            <Text></Text>
            <View style={{ flexDirection: "row", gap: 15 }}>
              <Button
                style={{ flex: 1, paddingVertical: 16, borderWidth: 0 }}
                onPress={onRegisterButtonClick}
              >
                <Text style={{ color: "#FFF" }}>Registrati</Text>
              </Button>
              <Button
                style={{
                  flex: 1,
                  paddingVertical: 16,
                  backgroundColor: "transparent",
                }}
                onPress={onLoginButtonClick}
              >
                <Text style={{ color: "#FFF" }}>Accedi</Text>
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

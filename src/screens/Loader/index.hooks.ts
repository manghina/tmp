import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { IAccount } from "@app/models/Account";

export const useLoaderScreen = () => {
  const navigation = useNavigation<any>();
  const rotation = useRef(new Animated.Value(0)).current;
  const progressBarWidth = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const account: IAccount = useSelector(selectors.getAccount);

  useEffect(() => {
    dispatch(actions.getAccountsMe.request({}));
  }, [dispatch]);

  useEffect(() => {
    const redirectDelay = 1000;
    let route: string = "tutorial";
    if (!account) {
      route = "tutorial";
    } else if (account.type === "user") {
      route = "user-home";
    } else {
      route = "professional-home";
    }

    const loadingDelay = setTimeout(() => {
      navigation.replace(route);
    }, redirectDelay);

    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: redirectDelay,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.timing(progressBarWidth, {
      toValue: 1,
      duration: redirectDelay,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    return () => {
      clearTimeout(loadingDelay);
      progressBarWidth.setValue(0);
    };
  }, [navigation, rotation, progressBarWidth, account]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return { rotateInterpolate, progressBarWidth };
};

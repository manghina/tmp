"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserRequestCard = void 0;
var Request_1 = require("@app/models/Request");
var react_1 = require("react");
var styles_1 = require("./styles");
var react_native_1 = require("react-native");
var ChatIcon_1 = require("@app/components/SvgIcons/ChatIcon");
var react_redux_1 = require("react-redux");
var native_1 = require("@react-navigation/native");
var redux_store_1 = require("../../../redux-store");
var userActionColor = "#FF8F1F";
var aiActionColor = "#3C77E8";
var contactTerminatedColor = "#181818";
var useUserRequestCard = function (request) {
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigation = (0, native_1.useNavigation)();
    var wiggleAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current; // Initial value for wiggle angle: 0
    var cardContainerStyles = (0, react_1.useMemo)(function () {
        var cardStyles = [styles_1.styles.cardContainer];
        switch (request.currentStatus) {
            case Request_1.RequestStatus.COLLECTING_INFORMATION:
                cardStyles.push(styles_1.styles.cardContainerUserInputAwaited);
                break;
            default:
                break;
        }
        if (request.currentStatus === Request_1.RequestStatus.COLLECTING_INFORMATION) {
            cardStyles.push({
                transform: [
                    {
                        rotate: wiggleAnim.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ["-0.03rad", "0.03rad"],
                        }),
                    },
                ],
            });
        }
        return cardStyles;
    }, [request]);
    var cardTitleStyles = (0, react_1.useMemo)(function () {
        var titleStyles = [styles_1.styles.cardTitle];
        switch (request.currentStatus) {
            case Request_1.RequestStatus.COLLECTING_INFORMATION:
                titleStyles.push({
                    color: userActionColor,
                });
                break;
            default:
                break;
        }
        return titleStyles;
    }, [request]);
    var cardDescriptionStyles = (0, react_1.useMemo)(function () {
        var descriptionStyles = [styles_1.styles.cardDescription];
        switch (request.currentStatus) {
            case Request_1.RequestStatus.COLLECTING_INFORMATION:
                descriptionStyles.push(styles_1.styles.cardDescriptionTextUserInputAwaited);
                break;
            default:
                break;
        }
        return descriptionStyles;
    }, [request]);
    var cardIcon = (0, react_1.useMemo)(function () {
        switch (request.currentStatus) {
            case Request_1.RequestStatus.COLLECTING_INFORMATION:
                return <ChatIcon_1.default color={userActionColor}/>;
            default:
                return <ChatIcon_1.default color={contactTerminatedColor}/>;
        }
    }, [request, cardTitleStyles]);
    var onCardPressed = (0, react_1.useCallback)(function () {
        dispatch(redux_store_1.actions.setCurrentRequest(request.toInterface()));
        dispatch(redux_store_1.actions.getUsersMeRequestsByRequestId.request({
            requestId: request._id,
        }));
        if (request.currentStatus === Request_1.RequestStatus.COLLECTING_INFORMATION ||
            true) {
            navigation.navigate("requests/chat");
        }
    }, [dispatch, navigation, request]);
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.loop(react_native_1.Animated.sequence([
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: -1,
                duration: 150,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: -1,
                duration: 150,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            react_native_1.Animated.timing(wiggleAnim, {
                toValue: 0,
                duration: 4500,
                useNativeDriver: true,
            }),
        ])).start();
    }, [wiggleAnim]);
    return {
        cardIcon: cardIcon,
        cardContainerStyles: cardContainerStyles,
        cardTitleStyles: cardTitleStyles,
        cardDescriptionStyles: cardDescriptionStyles,
        onCardPressed: onCardPressed,
    };
};
exports.useUserRequestCard = useUserRequestCard;

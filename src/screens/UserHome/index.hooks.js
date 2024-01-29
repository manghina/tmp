"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserHomeScreen = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_redux_1 = require("react-redux");
var redux_store_1 = require("@app/redux-store");
var useUserHomeScreen = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigation = (0, native_1.useNavigation)();
    var me = (0, react_redux_1.useSelector)(redux_store_1.selectors.getUserMe);
    var requestsList = (0, react_redux_1.useSelector)(redux_store_1.selectors.getRequestsList);
    var onSweepNowButtonPressed = (0, react_1.useCallback)(function () {
        dispatch(redux_store_1.actions.setCurrentRequest(null));
        navigation.navigate("requests/chat");
    }, [dispatch, navigation]);
    (0, react_1.useEffect)(function () {
        if (!me) {
            navigation.replace("Login");
        }
    }, [me, navigation]);
    (0, react_1.useEffect)(function () {
        dispatch(redux_store_1.actions.getUsersMeRequests.request({}));
    }, [dispatch]);
    return { me: me, requestsList: requestsList, onSweepNowButtonPressed: onSweepNowButtonPressed };
};
exports.useUserHomeScreen = useUserHomeScreen;

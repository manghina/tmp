import {
  NavigationContainerRef,
  CommonActions,
  StackActions,
} from "@react-navigation/native";

class NavigationService {
  private _navRef?: NavigationContainerRef<ReactNavigation.RootParamList>;

  setNavigationRef(ref: NavigationContainerRef<ReactNavigation.RootParamList>) {
    this._navRef = ref;
  }

  push(routeName: string, params?: any) {
    this._navRef?.dispatch(StackActions.push(routeName, params));
  }

  replace(routeName: string, params?: any) {
    this._navRef?.dispatch(StackActions.replace(routeName, params));
  }

  navigate(routeName: string, params?: any) {
    this._navRef?.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  }

  goBack() {
    this._navRef?.dispatch(CommonActions.goBack());
  }
}

export default new NavigationService();

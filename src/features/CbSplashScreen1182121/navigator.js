import { createStackNavigator } from "react-navigation-stack";

import Splash from "./screens/";

export default SplashBlueprintNavigator = createStackNavigator(
  {
    Splash: { screen: Splash }
  },
  {
    initialRouteName: "CbSplashScreen1182121",
    defaultNavigationOptions: ({ navigation }) => ({ header: null }),
  }
);

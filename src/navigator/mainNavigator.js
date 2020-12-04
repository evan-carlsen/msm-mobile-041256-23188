import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CbSplashScreen1182121Navigator from '../features/CbSplashScreen1182121/navigator';
import HomeScreen3182119Navigator from '../features/HomeScreen3182119/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion

    /** new navigators can be added here */
    SplashScreen: { screen: SplashScreen},
    CbSplashScreen1182121: { screen: CbSplashScreen1182121Navigator },
    HomeScreen3182119: { screen: HomeScreen3182119Navigator }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

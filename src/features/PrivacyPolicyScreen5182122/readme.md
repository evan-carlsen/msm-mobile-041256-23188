# Privacy Policy Screen

The Privacy Policy Screen is a ReactNative based screen that leverages the paralax with a custom header.
  
## Installation

After you have added the screen module into your project, you will need to configure a few items by modifying the project 
files in the github repository. You will need to review/modify/add:

**/PROJECT_ROOT_DIRECTORY/package.json:**

  **ADD** Dependency after Line 16 (dependencies opening line)
  
  ``` 
  "react-native-parallax-scroll-view": "^0.21.3",
  "react-native-cardview": "^2.0.5",
  ```

**/src/features/PrivacyPolicyScreen#######/screens/index.js**

  **MODIFY** Line 82, (REPLACE BlankScreen3177788 with Home Screen name)
  
  ``` onPress={() => { this.props.navigation.navigate('BlankScreen3177788') }}> ```
  
  **MODIFY** Line 124, Replace URL in onPress for READ FULL POLICY link to Website URL:
  
  ```onPress={() => Linking.openURL('https://www.crowdbotics.com/privacy-policy')} ```

  **REVIEW /src/config/installed_blueprints.js**
    Make sure any screens that aren’t desired in the side menu are removed from the file.

   In installed_blueprints.js you need to add objects for every screen that you want to show in the sidemenu/splash screen.
   They have a specific format:
   
   ``` { name: 'privacyPolicy', human_name: 'Privacy Policy', access_route: 'privacyPolicy'} ```
   
   name:  doesn't matter much, its used as a unique key for the side menu and splash screens array of 
   
   buttons:  it must be unique, that's the only requirement
   
   human_name:  is what will be displayed in actual app
   
   access_route:  must be the name of the key in your mainNavigator setup  
  
  **/src/mainNavigator.js**
   
   **ADD** comma in Line 44 (IMPORT_SCREEN_NAME must match the access_route in the installed_blueprints.js file above)
   
   ```(contentComponent: SideMenu , ```

   **ADD** above top listed screen BlueprintImportInsertion:  
   
   ```import PrivacyPolicyScreen#######Navigator from '../features/PrivacyPolicyScreen#######/navigator';```
   
   **ADD** above top listed screen in BlueprintNavigationInsertion section:
   
   ```PrivacyPolicyScreen#######: { screen: PrivacyPolicyScreen#######Navigator },```
   
   **ADD** above top listed screen import
   
   **ADD** After Line 44 (this RouteName must match the name in the installed_blueprint.js file)
   
   ```initialRouteName: “IMPORT_SCREEN_NAME”, ```

   If you do not want this screen to be loaded first, put the first loaded screen desired instead and link this screen where desired.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

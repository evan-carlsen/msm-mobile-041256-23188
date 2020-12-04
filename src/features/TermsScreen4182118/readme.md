# Terms and Conditions Screen

The Terms and Conditions Screen is a ReactNative based screen that leverages the webview with a simple header.
  
## Installation

After you have added the screen module into your project, you will need to configure a few items by modifying the project 
files in the github repository. You will need to review/modify/add:

**/PROJECT_ROOT_DIRECTORY/package.json:**

  **ADD** Dependency after Line 16 (dependencies opening line)
  
  ``` "react-native-webview": "^10.8.2", ```

  **/src/features/TermsScreen######/index.js:**
 
  **MODIFY** Line 161 (replace BlankScreen3177788 with your desired Home/return screen name:

  ``` <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.props.navigation.navigate('BlankScreen3177788') }}> ```
  
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
   
   ```import TermsScreen#######Navigator from '../features/TermsScreen#######/navigator';```
   
   **ADD** above top listed screen in BlueprintNavigationInsertion section:
   
   ```TermsScreen#######: { screen: TermsScreen#######Navigator },```
   
   **ADD** After Line 44 (this RouteName must match the name in the installed_blueprint.js file)
   
   ```initialRouteName: “IMPORT_SCREEN_NAME”, ```

   If you do not want this screen to be loaded first, put the first loaded screen desired instead and link this screen where desired.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

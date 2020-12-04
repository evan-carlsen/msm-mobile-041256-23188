# CB Slide Onboarding Tutorial Screen

The CB Slide Onboarding Tutorial Screen is a ReactNative based onboarding screen. It can be configured to have 1 or many 
slide screens with content and expansion detailed in the file.
  
## Installation

After you have added the screen module into your project, you will need to configure a few items by modifying the project 
files in the github repository. You will need to review/modify/add:

**/PROJECT_ROOT_DIRECTORY/package.json:**

  **ADD** Dependency after Line 16 (dependencies opening line)
  
  ```"react-native-app-intro-slider": "^4.0.4", ```

 **/src/features/OnboardingSlideScreen#######/index.js:**
 
 **MODIFY** Const Slides, update with your slides content/desired number of slides:
 
 ```
 const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: { uri: "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png" },
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: { uri: "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png" },
    backgroundColor: '#febe29',
  },
  // {
  //   key: 'three',
  //   title: 'Rocket guy',
  //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  //   image: require('./assets/3.jpg'),
  //   backgroundColor: '#22bcb5',
  // }
];
```
 
 **MODIFY** Line 64, Replace BlankScreen2177769 with desired destination home/screen:
 
 ```this.props.navigation.navigate('BlankScreen2177769')```
 

 **/src/features/
 Screen#######/navigator.js** (where the ####### is replaced by the generated numeric string specific to your 
  project)
  
  **REVIEW /src/config/installed_blueprints.js**
  
   Make sure any *screens that aren’t desired in the side menu are removed from the file.*

   In installed_blueprints.js you need to add objects for every screen that you want to show in the sidemenu/splash screen.
   They have a specific format:
   
   ``` { name: 'onboarding', human_name: 'Onboarding', access_route: 'Onboarding'} ```
   
   name:  doesn't matter much, its used as a unique key for the side menu and splash screens array of 
   
   buttons:  it must be unique, that's the only requirement
   
   human_name:  is what will be displayed in actual app
   
   access_route:  must be the name of the key in your mainNavigator setup  
  
  **/src/mainNavigator.js** (needed if you intend to have this be the first loaded screen, assume you don't have a splash).
  
  **ADD** below import section (//@BlueprintImportInsertion):
   ``` import OnboardingSlideScreen#######Navigator from '../features/OnboardingSlideScreen#######/navigator'; ```
   
   **ADD** below Nav section (//@BlueprintNavigationInsertion):
     OnboardingSlideScreen#######: { screen: OnboardingSlideScreen#######Navigator }, // Onboarding Slide Screen
   
   **ADD** comma in Line 44 (**IMPORT_SCREEN_NAME** must match the **access_route** in the installed_blueprints.js file above)
   
   ```(contentComponent: SideMenu , ```
   
   **ADD** After Line 44 (this RouteName must match the name of the screen folder - i.e., OnboardingSlideScreen#######)
   
   ```initialRouteName: “IMPORT_SCREEN_NAME”, ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

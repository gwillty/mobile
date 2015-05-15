//This section sets up some basic app metadata,
//the entire section is optional

App.info({
  id: 'com.gwill.web.services',
  name: 'gwill',
  description: 'Say your name app',
  author : 'Gwill Team',
  email: 'support@gwill.org',
  website: 'http://gwill.org'


});

//Set up resources such as icons and launch screens
App.icons({
  'iphone': 'icons/icon-60.png',
  'iphone_2x' : 'icons/icon-60@2x.png',
  // other phones

});

App.launchScreens({
  'iphone' : 'splash/Default~iphone.png',
  // other phones
});

//Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor','0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar',true);

//Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect',{
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'

});













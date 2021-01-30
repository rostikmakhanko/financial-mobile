/**
 * @format
 */

import {AppRegistry, Button, SafeAreaView, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import {screenIds, SCREENS} from './src/screens';
import React from 'react';

Navigation.registerComponent('Home', () => App);

//Register Screens
Object.entries(SCREENS).forEach(([key, value]) => {
  console.log(key, value);
  Navigation.registerComponent(value.id, value.generator);
});

Navigation.events().registerAppLaunchedListener(async () => {
  console.log('SET root');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

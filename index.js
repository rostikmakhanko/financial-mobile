/**
 * @format
 */

import App from './App';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from './src/screens';

//Register root screen
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
              options: {
                topBar: {
                  title: {
                    text: 'Home Screen',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});

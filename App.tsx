/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {screenIds} from './src/screens';

declare const global: {HermesInternal: null | {}};

type Props = {
  componentId: string;
};

const App = (props: Props) => {
  const onShowModalPress = async () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: screenIds.LOGIN_SCREEN,
              passProps: {
                text: 'stack with one child',
              },
              options: {
                topBar: {
                  title: {
                    text: 'Modal',
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  const onPushScreenPress = () => {
    console.log(props.componentId);
    Navigation.push(props.componentId, {
      component: {
        name: screenIds.REGISTER_SCREEN,
        options: {
          topBar: {
            title: {
              text: 'Register Screen',
            },
          },
        },
      },
    });
  };

  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title={'Show modal'} onPress={onShowModalPress} />
      <Button title={'Push screen'} onPress={onPushScreenPress} />
    </SafeAreaView>
  );
};

export default App;

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
import {SafeAreaView, Button} from 'react-native';
import {Text, View} from 'react-native-ui-lib/core';

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

  const onPushTransactionsScreenPress = () => {
    console.log(props.componentId);
    Navigation.push(props.componentId, {
      component: {
        name: screenIds.TRANSACTIONS_SCREEN,
        options: {
          topBar: {
            title: {
              text: 'Transactions',
            },
          },
        },
      },
    });
  };

  return (
    <SafeAreaView style={{justifyContent: 'space-between'}}>
      <View>
        <Text marginT-20 center style={{fontSize: 20}}>
          Hello Rostyslav!
        </Text>
        <Text marginT-20 center style={{fontSize: 20}}>
          Your balance: 12455.43
        </Text>
      </View>
      <View>
        <Button title={'Show modal'} onPress={onShowModalPress} />
        <Button title={'Register'} onPress={onPushScreenPress} />
        <Button
          title={'Show all transactions'}
          onPress={onPushTransactionsScreenPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

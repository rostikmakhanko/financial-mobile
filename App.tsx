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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

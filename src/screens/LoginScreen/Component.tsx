import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';

const Component = () => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.LOGIN_SCREEN, () => Component);

export default Component;

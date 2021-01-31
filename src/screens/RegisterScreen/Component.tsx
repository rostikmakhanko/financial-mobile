import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';
import {Button} from 'react-native-ui-lib/core';

const Component = () => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <Button label={'Sign up'} onPress={() => console.log('Handle sign up')} />
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.REGISTER_SCREEN, () => Component);

export default Component;

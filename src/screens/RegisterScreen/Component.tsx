import React from 'react';
import {SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';
import {Button, View} from 'react-native-ui-lib/core';
import {TextField} from 'react-native-ui-lib';
import {useHooks} from './useHooks';

const Component = () => {
  const {
    onRegisterButtonPress,
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
  } = useHooks();

  return (
    <SafeAreaView
      style={{
        marginVertical: 20,
        marginHorizontal: 20,
      }}>
      <View>
        <TextField title={'Name'} defaultValue={name} onChangeText={setName} />
        <TextField
          title={'Email'}
          defaultValue={email}
          onChangeText={setEmail}
        />
        <TextField
          title={'Password'}
          defaultValue={password}
          onChangeText={setPassword}
        />
      </View>
      <Button label={'Sign Up'} onPress={onRegisterButtonPress} />
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.REGISTER_SCREEN, () => Component);

export default Component;

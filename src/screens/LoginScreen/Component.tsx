import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';

import {useHooks} from './useHooks';
import {Button} from 'react-native-ui-lib/core';

type Props = {
  email: string;
  password: string;
};

const Component = (props: Props) => {
  const {name, surname, setDefaultUserData} = useHooks(props);

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Text>{`Name: ${name}`}</Text>
      <Text>{`Surname: ${surname}`}</Text>
      <Button label={'Set default user data'} onPress={setDefaultUserData} />
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.LOGIN_SCREEN, () => Component);

export default Component;

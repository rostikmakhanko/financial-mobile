import {useState} from 'react';
import {signUp} from '../../actions/signUp';

export const useHooks = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name);

  const onRegisterButtonPress = async () => {
    console.log('onSignUpButtonPress');
    await signUp({name, email, password});
  };

  return {
    onRegisterButtonPress,
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
  };
};

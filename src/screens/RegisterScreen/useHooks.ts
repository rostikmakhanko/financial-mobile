import {useState} from 'react';

export const useHooks = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name);

  const onRegisterButtonPress = () => {
    console.log('onSignInButtonPress');
  };

  return {onRegisterButtonPress, name, email, password, setName, setEmail, setPassword};
};

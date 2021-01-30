import React from 'react';

type Props = {
  email: string;
  password: string;
};

export const useHooks = (props: Props) => {
  const onSignInButtonPress = () => {
    console.log('onSignInButtonPress');
  };
};

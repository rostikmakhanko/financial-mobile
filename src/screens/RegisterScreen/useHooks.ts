type Props = {
  email: string;
  password: string;
};

export const useHooks = (props: Props) => {
  const onRegisterButtonPress = () => {
    console.log('onSignInButtonPress');
  };
};

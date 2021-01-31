import {useStores} from './useStores';
import {setDefaultUserData} from '../../actions/setDefaultUserData';

type Props = {
  email: string;
  password: string;
};

export const useHooks = (props: Props) => {
  const {name, surname} = useStores(props);

  const onSignInButtonPress = () => {
    console.log('onSignInButtonPress');
  };

  const onSetDefaultUserDataPress = () => {
    setDefaultUserData();
  };

  return {name, surname, setDefaultUserData};
};

import {useConnect} from 'remx';

import {getters as userGetters} from '../../stores/user';

type Props = {};

export const useStores = (props: Props) =>
  useConnect(() => ({
    name: userGetters.getName(),
    balance: userGetters.getBalance(),
  }));

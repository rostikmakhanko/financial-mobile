import {setters as userSetters} from '../stores/user';

export const setDefaultUserData = () => {
  userSetters.setName('Rostik');
  userSetters.setSurname('Makhanko');
};

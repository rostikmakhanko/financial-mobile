import {firebaseApiKey} from '../../keys/firebase';
import {setters as userSetters} from '../stores/user';

const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseApiKey}`;

type Props = {name: string; email: string; password: string};

export const signUp = async ({name, email, password}: Props) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    console.log(response.json());
    userSetters.setName(name);
    userSetters.setEmail(email);
    userSetters.seBalance(0);
  } catch (err) {
    console.log('[signUp] error', err);
  }
};

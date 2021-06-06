import {firebaseApiKey} from '../../keys/firebase';

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
  } catch (err) {
    console.log('[signUp] error', err);
  }
};

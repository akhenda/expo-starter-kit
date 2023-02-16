import { useEffect, useState } from 'react';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import useSWR from 'swr';

import { firebase } from '@src/services/firebase';

export const useLogin = () => useSWR('firebase:login', firebase.auth.login);

export const useSignup = () => useSWR('firebase:signup', firebase.auth.signup);

export const useResetPassword = () => useSWR('firebase:reset-password', firebase.auth.resetPassword);

export const useOnAuthStateChange = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const listener = firebase.firebase.auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        firebase.auth.listenToClaims(currentUser);
      }
    });

    return listener;
  }, []);

  return { user };
};

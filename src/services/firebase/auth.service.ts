/* eslint-disable no-underscore-dangle */
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

import logger from '@services/logger';

import { auth, firestore } from './config';

/**
 * Sign up a user
 * @param name {string} The name of the user
 * @param email {string} The email address of the user
 * @param password {string} The password to set for the user
 */
export async function signup(name: string, email: string, password: string) {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      const { user } = userCredential;
      user.updateProfile({ displayName: name });
      logger.info('🚀 ~ file: auth.ts ~ .then ~ user', user);
    })
    .catch((error) => {
      const { code, message } = error;
      logger.info('🚀 ~ file: auth.ts ~ signup ~ code', code);
      logger.info('🚀 ~ file: auth.ts ~ signup ~ message', message);
    });
}

/**
 * Given email and password, login the user
 * @param email {string} The email address of the user
 * @param password {string} The password to set for the user
 */
export async function login(email: string, password: string) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      logger.info('🚀 ~ file: auth.ts ~ .then ~ user', user);
    })
    .catch((error) => {
      const { code, message } = error;
      logger.info('🚀 ~ file: auth.ts ~ login ~ code', code);
      logger.info('🚀 ~ file: auth.ts ~ login ~ message', message);
    });
}

/**
 * The reset password for the given email
 * @param email {string} The email address of the user
 */
export async function resetPassword(email: string) {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      logger.info('Paswword reset successful');
    })
    .catch((error) => {
      const { code, message } = error;
      logger.info('🚀 ~ file: auth.ts ~ resetPassword ~ code', code);
      logger.info('🚀 ~ file: auth.ts ~ resetPassword ~ message', message);
    });
}

/**
 * Custom function to listen to user auth claims. Essentially, what happens is
 * that we have a function on the server that watches for user claims changes
 * and updates a collection name `user-claims`. WHat we want to do, if refresh
 * the cureently logged in user's token so that if their access to something
 * has been revoked, we know immediately
 *
 * @param currentUser
 */
export function listenToClaims(currentUser: FirebaseAuthTypes.User) {
  let lastCommitted: unknown;

  if (currentUser) {
    firestore
      .collection('user-claims')
      .doc(currentUser.uid)
      .onSnapshot((snapshot) => {
        if (snapshot) {
          const data = snapshot.data();

          if (data && data._lastCommitted) {
            if (lastCommitted && !data._lastCommitted.isEqual(lastCommitted)) {
              // force a refresh of the user's ID token
              currentUser.getIdToken(true);
            }

            lastCommitted = data._lastCommitted;
          }
        }
      });
  }
}

const AuthService = {
  listenToClaims,
  login,
  resetPassword,
  signup,
};

export default AuthService;

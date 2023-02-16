import logger from '@services/logger';

import { functions } from './config';

/**
 * A function that calls the HTTPS callable helloWorld Firebase Function
 */
export function helloWorld() {
  try {
    functions
      .httpsCallable('helloWorld')({ name: 'soje' })
      .then((result) => {
        const { data } = result;
        logger.info('🚀 ~ file: functions.ts ~ helloWorld .then ~ data', data);
      })
      .catch((error) => {
        const { message } = error;
        logger.info('🚀 ~ file: functions.ts ~ helloWorld .catch ~ message', message);
        logger.info('🚀 ~ file: functions.ts ~ helloWorld .catch ~ error', error);
      });
  } catch (error) {
    logger.info('🚀 ~ file: functions.ts ~ helloWorld catch ~ error', error);
  }
}

const FuntionsService = {
  helloWorld,
};

export default FuntionsService;

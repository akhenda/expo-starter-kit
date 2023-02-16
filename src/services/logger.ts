import { consoleTransport, logger as rnLogs } from 'react-native-logs';

const defaultConfig = {
  async: true,
  dateFormat: 'time',
  enabled: true,
  levels: {
    debug: 0,
    error: 3,
    info: 1,
    warn: 2,
  },
  printDate: true,
  printLevel: true,
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: {
      error: 'redBright',
      info: 'blueBright',
      warn: 'yellowBright',
    },
  },
};

const logger = rnLogs.createLogger<'debug' | 'error' | 'info' | 'warn'>(defaultConfig);

/**
 * We tell typescript we intend to hang RNLogs off of the console object.
 *
 * It'll live at console.logger, so you can use it like so:
 *
 *   console.logger.log('hello world')
 */
declare global {
  interface Console {
    /**
     * RNLogs client for logging, displaying, measuring performance,
     * and more. See https://github.com/infinitered/reactotron for more!
     */
    logger: typeof logger;
  }
}

// in dev, we attach RNLogs, in prod we attach a interface-compatible mock.
if (__DEV__) {
  // eslint-disable-next-line no-console
  console.logger = logger; // attach reactotron to `console.logger`
} else {
  // attach a mock so if things sneak by our __DEV__ guards, we won't crash.
  // eslint-disable-next-line no-console
  console.logger = {} as typeof logger;
}

export default logger;

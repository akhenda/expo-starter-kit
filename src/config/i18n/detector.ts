/* eslint-disable no-console */
import { getLocales } from 'expo-localization';
import type { ModuleType } from 'i18next';
import noop from 'lodash/noop';

import storage from '@src/stores/mmkv';

const I18N_STORAGE_KEY = '@AppIntl:language';

export const languageDetector = {
  async: true,
  cacheUserLanguage: async (language: string) => {
    try {
      await storage.set(I18N_STORAGE_KEY, language);
    } catch (error) {
      console.error(error);
    }
  },
  detect: async (callback: (locale: string) => void) => {
    const storedLanguage = await storage.getString(I18N_STORAGE_KEY);

    if (storedLanguage) return callback(storedLanguage);

    let phoneLanguage = getLocales()[0]?.languageCode || 'en';

    phoneLanguage = phoneLanguage.replace('_', '-');

    return callback(phoneLanguage);
  },
  init: noop,
  type: 'languageDetector' as ModuleType,
};

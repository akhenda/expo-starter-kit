import type { FirebaseStorageTypes } from '@react-native-firebase/storage';

import logger from '@services/logger';

import { storage } from './config';

export const storageRef = storage.ref();

export async function getImageURL(filePath: string) {
  const url = await storageRef.child(filePath).getDownloadURL();

  return url;
}

export async function listFilesAndDirectories(
  reference: FirebaseStorageTypes.Reference,
  pageToken: string,
): Promise<void> {
  return reference.list({ pageToken }).then((result) => {
    // Loop over each item
    result.items.forEach((ref) => {
      logger.info('🚀 ~ file: storage.ts ~ listFilesAndDirectories ~ ref.fullPath', ref.fullPath);
    });

    if (result.nextPageToken) {
      return listFilesAndDirectories(reference, result.nextPageToken);
    }

    return Promise.resolve();
  });
}

const StorageService = {
  getImageURL,
  listFilesAndDirectories,
};

export default StorageService;

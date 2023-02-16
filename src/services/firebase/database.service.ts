import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { firestore } from './config';

export const { serverTimestamp } = FirebaseFirestoreTypes.FieldValue;

export type DocumentData = FirebaseFirestoreTypes.DocumentData;
export type DocumentReference<T extends DocumentData> = FirebaseFirestoreTypes.DocumentReference<T>;
export type SetValue<T> = FirebaseFirestoreTypes.SetValue<T>;

/**
 * Genereic Firestore class for CRUD operations
 */
class Database<T extends DocumentData> {
  collection;

  /**
   * Specify 'users', 'categories', 'books' or any name as collection name
   *
   * @param collectionName {string} The name of the collection to work with
   */
  constructor(collectionName: string) {
    this.collection = firestore.collection<T>(collectionName);
  }

  /**
   * resolve a relation, returns the referenced document
   *
   * @param documentReference
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  async getReference(documentReference: DocumentReference<T & { uid?: string }>) {
    const res = await documentReference.get();
    const data = res.data();

    if (data && documentReference.id) data.uid = documentReference.id;

    return data;
  }

  /**
   * Returns list of documents as an array of javascript objects
   *
   * @returns {array} The list/array of documents you requested
   */
  async getAll() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id, // append document id to each document
        ...doc.data(),
      };
    });
  }

  /**
   * Returns a single document in object format
   *
   * @param {object} The react-query object with queryKey array
   * @returns {object|null} The found document
   */
  async getOne({ queryKey }: { queryKey: [string, { id: string }] }): Promise<DocumentData | undefined> {
    const { id } = queryKey[1];

    if (!id) return undefined; // entity form is in create mode

    const snapshot = await this.collection.doc(id).get();

    return snapshot.data();
  }

  /**
   * Save a new document in the database
   *
   * @param data {object} The new data to save/create
   * @returns {object} The created/saved document
   */
  async create(data: T) {
    const values = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const ref = await this.collection.add(values);

    return ref;
  }

  /**
   * Update an existing document with new data
   *
   * When just the doc id is passed, we only update the updatedAt field.
   * We need this at times to force regeneration of a firebase's user IdToken
   * when we update the user doc.
   *
   * @param id {string} The ID of the document
   * @param values {object} The data to update. Can be an empty object to only
   * update the updatedAt field
   * @returns {object} The updated document
   */
  async update(id: string, values: Partial<SetValue<T>>) {
    await this.collection.doc(id).update({ ...values, updatedAt: serverTimestamp() });
  }

  /**
   * Delete an existing document from the collection
   *
   * @param id {string} The ID of the document to delete
   */
  async remove(id: string) {
    await this.collection.doc(id).delete();
  }
}

// Create services for each entity type e.g.
export const Authors = new Database('authors');
export const Categories = new Database('categories');
export const Books = new Database('books');

const DatabaseService = {
  authors: Authors,
  books: Books,
  categories: Categories,
};

export default DatabaseService;

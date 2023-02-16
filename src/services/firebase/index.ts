import authService from './auth.service';
import app, { auth, firestore, fuego, functions } from './config';
import databaseService from './database.service';
import functionsService from './functions.service';

/**
 * Manages all firebase related queries.
 */
export class Firebase {
  /**
   * Fuego class instance to be used with the Fuego Provider to set up swr-firestore
   */
  fuego: typeof fuego;

  /**
   * Original Firebase modules
   */
  firebase: {
    app: typeof app;
    auth: typeof auth;
    firestore: typeof firestore;
    functions: typeof functions;
  };

  /**
   * Firestore collections helpers
   */
  collections: {
    authors: (typeof databaseService)['authors'];
    categories: (typeof databaseService)['categories'];
    books: (typeof databaseService)['books'];
  };

  /**
   * Custom auth functions
   */
  auth: typeof authService;

  /**
   * Custom functions that call Firebase Functions
   */
  functions: typeof functionsService;

  constructor() {
    this.fuego = fuego;
    this.auth = authService;
    this.functions = functionsService;
    this.firebase = { app, auth, firestore, functions };
    this.collections = {
      authors: databaseService.authors,
      books: databaseService.books,
      categories: databaseService.categories,
    };
  }
}

// Singleton instance of Firebase for convenience
export const firebase = new Firebase();

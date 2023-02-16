import app from '@react-native-firebase/app';
import FirebaseAuth from '@react-native-firebase/auth';
import FirebaseFirestore from '@react-native-firebase/firestore';
import FirebaseFunctions from '@react-native-firebase/functions';
import FirebaseStorage from '@react-native-firebase/storage';

// firebase config would go here in a firebase-js project

export const firestore = FirebaseFirestore();
export const auth = FirebaseAuth();
export const functions = FirebaseFunctions();
export const storage = FirebaseStorage();

// Use a local emulator in development
// set the host and the port property to connect to the emulator
// set these before any read/write operations occur to ensure it doesn't affect your Cloud Firestore data!
if (__DEV__) {
  // If you are running on a physical device, replace http://localhost with the local ip of your PC. (http://192.168.x.x)
  auth.useEmulator('http://localhost:9099');
  firestore.useEmulator('localhost', 8080);
  storage.useEmulator('localhost', 9199);
  functions.useEmulator('localhost', 5001);
}

/**
 * CustomFuego Class that uses rnfirebase.io's native Firebase
 * SDK instead of the usual Firebase JS SDK
 */
class CustomFuego {
  public db: ReturnType<typeof FirebaseFirestore>;

  public auth: typeof FirebaseAuth;

  public functions: typeof FirebaseFunctions;

  constructor() {
    this.db = FirebaseFirestore();
    this.auth = FirebaseAuth;
    this.functions = FirebaseFunctions;
  }
}

/**
 * Custom fuego instance
 */
export const fuego = new CustomFuego();

export default app;

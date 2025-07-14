import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  projectId: "adagia",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (import.meta.env.DEV) {
  connectFirestoreEmulator(db, "localhost", 8080);
}

export { db };

import { initializeApp, getApps } from "firebase/app";



export default function useFirebase() {
  const {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId} = useRuntimeConfig().public;
    const firebaseConfig = {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    };
    if (getApps().length == 0) {
       initializeApp(firebaseConfig);
    }
}
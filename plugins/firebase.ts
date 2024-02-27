import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();

  const firebaseApp = initializeApp({
    apiKey: runtimeConfig.firebaseApiKey,
    authDomain: runtimeConfig.firebaseAuthDomain,
    databaseURL: runtimeConfig.firebaseDatabaseUrl,
    projectId: runtimeConfig.firebaseProjectId,
    storageBucket: runtimeConfig.firebaseStorageBucket,
    messagingSenderId: runtimeConfig.firebaseMessagingSenderId,
    appId: runtimeConfig.firebaseAppId,
    measurementId: runtimeConfig.firebaseMeasurementId,
  });

  const firebaseStorage = getStorage(firebaseApp);
  const firebaseFirestore = getFirestore(firebaseApp);

  nuxtApp.provide("firebaseApp", firebaseApp);
  nuxtApp.provide("firebaseStorage", firebaseStorage);
  nuxtApp.provide("firebaseFirestore", firebaseFirestore);
});

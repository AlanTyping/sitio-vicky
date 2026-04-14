import admin from 'firebase-admin';

if (!admin.apps.length) {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT no está definido');
  }

  try {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

  } catch (error) {
    console.error('🔥 Error inicializando Firebase:', error);
    throw error; // ❗ IMPORTANTE: no silenciar
  }
}

export const db = admin.firestore();
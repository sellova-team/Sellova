// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwsWE1or8GRr8vilM0WcBa5EdZmqOpc0w",
  authDomain: "sellova-a91a0.firebaseapp.com",
  projectId: "sellova-a91a0",
  storageBucket: "sellova-a91a0.firebasestorage.app",
  messagingSenderId: "375901981488",
  appId: "1:375901981488:web:4ac5fd8ef48d89104bd6f5",
  measurementId: "G-CXGLQ1G9H3"
};

// جلوگیری از ساخت دوباره app و ایجاد ارور
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// سرویس‌های Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

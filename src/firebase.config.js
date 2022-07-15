import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBoQePz9IWjNJWcx4cL-tJXnL4Dxk8HtiY',
  authDomain: 'restaurantapp-f0ca4.firebaseapp.com',
  databaseURL: 'https://restaurantapp-f0ca4-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-f0ca4',
  storageBucket: 'restaurantapp-f0ca4.appspot.com',
  messagingSenderId: '344138054507',
  appId: '1:344138054507:web:70e79eb6da9a9e6137aa2e',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

import { async } from '@firebase/util';
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { firestore } from '~/firebase.config';

//saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'shoesItems', `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllShoesItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'shoesItems'), orderBy('id', 'desc')),
  );
  return items.docs.map((doc) => doc.data());
};

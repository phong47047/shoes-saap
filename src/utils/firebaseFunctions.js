import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '~/firebase.config';

//saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'shoesItems', `${Date.now()}`), data, {
    merge: true,
  });
};

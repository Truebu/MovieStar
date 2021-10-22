import { db } from '../firebase/firebase-config';

export const firebaseQueris = async(uid, path) => {
  const cartQuery = await db.collection(`${uid}/user/${path}`);
  const cart = [];
  cartQuery.onSnapshot(snap => {
    snap.forEach(snapHijo => {
      cart.push({
        id: snapHijo.id
      })
    })
  })
  return cart
}


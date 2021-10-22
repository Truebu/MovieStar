import { db } from '../firebase/firebase-config';

export const firebaseQueris = async (uid, path, movieId) => {
  let cart = ''
  await db.collection(`${uid}/user/${path}`).get()
    .then(snap => {
      snap.forEach(snapHijo => {
        if (snapHijo.data().id === movieId) {
          cart = snapHijo.id
        }
      })
    })
  //
  return cart
}

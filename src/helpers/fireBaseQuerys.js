import { db } from '../firebase/firebase-config';

export const firebaseQueris = async (uid, path, movieId = []) => {
  let cart = [];
  await db.collection(`${uid}/user/${path}`).get()
    .then(snap => {
      snap.forEach(snapHijo => {
        let id = snapHijo.data().id
        if (movieId.includes(id)) {
          cart.push(snapHijo.id)
        }
      })
    })
  //
  return cart
}

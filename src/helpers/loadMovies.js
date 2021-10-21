import { db } from "../firebase/firebase-config"

export const loadMovies = async (path, uid) => {
  const moviesSnap = await db.collection(`${uid}/user/${path}`).get();
  const movies = [];

  moviesSnap.forEach(snapMovie => {
    movies.push({
      id: snapMovie,
      ...snapMovie.data()
    })
  })

  return movies;
}


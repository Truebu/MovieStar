import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        await dispatch( login( user.uid, user.displayName ) )
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export const singInWithGoogle = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({user}) => {
        dispatch( login(user.uid, user.displayName) )
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
)

import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

/**
 * Login Process 
 */

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( ({ user }) => {
        dispatch( login( user.uid, user.displayName ) )
      })
      .catch((e) => {
        console.log(e.message)
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

/**
 * Register Process
 */

/**
 * Logout Process
 */
 export const startLogout = () => {
  return async( dispatch ) => {
      await firebase.auth().signOut();
      dispatch( logout() );
  }
}

export const logout = () => ({
  type: types.logout
})

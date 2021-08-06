import React, { useReducer } from 'react'
import { AppRouter } from './routes/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';


const init = {
  name: 'Luis'
}

export const MoviestarApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  // .useEffect
  
  return (
    <AuthContext.Provider value = {{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

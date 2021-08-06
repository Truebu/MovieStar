import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { AuthContext } from '../auth/AuthContext'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  // ...args = isAuth
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
             
          />

          <PrivateRoute
            
          />
        </Switch>
      </div>
    </Router>
  )
}

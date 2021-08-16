import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { LoginScreen } from '../components/auth/LoginScreen';

/* import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'; */

import { DashBoardRoutes } from './DashboardRoutes';

export const AppRouter = () => {


  return (
    <Router>
      <div>
        <Switch>
            <Route
              exact
              path="/auth/login" 
              component={ LoginScreen }
            />

          <Route
            path="/" 
            component={ DashBoardRoutes }
          />
        </Switch>
      </div>
    </Router>
  )
}

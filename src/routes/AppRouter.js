import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { AuthRouter } from './AuthRouter';

/* import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'; */

import { DashBoardRoutes } from './DashboardRoutes';

export const AppRouter = () => {


  return (
    <Router>
      <div>
        <Switch>
            <Route
              path="/auth" 
              component={ AuthRouter }
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

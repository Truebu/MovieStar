import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { DashboardPrivate } from './DashboardPrivate';
import { DashboardPublic } from './DashboardPublic';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const is = false

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            isAuthenticated = {is}
            path="/private"
            component={ DashboardPrivate }
          />
          <PublicRoute
            isAuthenticated = {is}
            path="/public" 
            component={ DashboardPublic }
          />
        </Switch>
      </div>
    </Router>
  )
}

import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AuthRouter = () => {
  return (
    <div className = "auth__main">
      <div className = "auth__box-container">
        <Switch>
          <Route
              exact
              path="/public/auth/login"
              component={ LoginScreen }
          />
          <Redirect to="/public/auth/login" />
        </Switch>
      </div>
    </div>
  )
}

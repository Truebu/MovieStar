import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import { login } from '../actions/auth';

import { firebase } from '../firebase/firebase-config'

import { DashboardPrivate } from './DashboardPrivate';
import { DashboardPublic } from './DashboardPublic';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const [checkLog, setCheckLog] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const dispatch = useDispatch()
  
  // firebase.auth().signOut()

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( async(user) => {
      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ))
        setIsLoggedIn( true )
        // Payload more global info here -->
      } else {
        setIsLoggedIn( false )
      }
      setCheckLog( false )
    })

  }, [dispatch, setCheckLog, setIsLoggedIn])

  if (checkLog) { //pick one animation here -->
    return(
      <h1>wait ... </h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            isAuthenticated = {isLoggedIn}
            path="/private"
            component={ DashboardPrivate }
          />
          <PublicRoute
            isAuthenticated = {isLoggedIn}
            path="/public" 
            component={ DashboardPublic }
          />
          <Redirect to="/public/home" />
        </Switch>
      </div>
    </Router>
  )
}

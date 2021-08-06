import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="" component={ '' }/>
          
          <Redirect to=""/>
        </Switch>
      </div>
    </>
  )
}

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { MovieScreen } from '../components/movies/MovieScreen';
import { AuthRouter } from './AuthRouter';

export const DashboardPublic = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/public/home" component={ HomeScreen }/>
          <Route exact path="/public/movie" component={ MovieScreen }/>
          <Route path="/public/auth" component={ AuthRouter } />
          <Redirect to="/public/home"/>
        </Switch>
      </div>
    </>
  )
}

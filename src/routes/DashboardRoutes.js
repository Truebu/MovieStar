import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CartScreen } from '../components/cart/CartScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { MovieScreen } from '../components/movies/MovieScreen';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar/>

      <div>
        <Switch>
          <Route exact path="/cart" component={ CartScreen }/>
          <Route exact path="/home" component={ HomeScreen }/>
          <Route exact path="/movie" component={ MovieScreen }/>

          <Redirect to="/home"/>
        </Switch>
      </div>
    </>
  )
}

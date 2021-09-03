import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CartScreen } from '../components/cart/CartScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { MovieScreen } from '../components/movies/MovieScreen'

export const DashboardPrivate = () => {
  return (
    <div>
      <Switch>
          <Route exact path="/private/cart" component={ CartScreen } />
          <Route exact path="/private/home" component={ HomeScreen }/>
          <Route exact path="/private/movie" component={ MovieScreen }/>
          <Redirect to="/private/home"/>
      </Switch>
    </div>
  )
}

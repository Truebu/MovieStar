import React from 'react';
import { AppRouter } from './routes/AppRouter';

// imports
import { Provider } from 'react-redux';
import { store } from './store/store';

export const MoviestarApp = () => {
  
  return (
    <Provider store = { store }>
      <AppRouter />
    </Provider>
  )
}

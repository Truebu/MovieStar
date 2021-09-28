import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { apiReducer } from '../reducers/apiReducer';
import { authReducer } from '../reducers/authReducer';
import { cartReducer } from '../reducers/cartReducer';
import { activeMovieReducer } from '../reducers/activeMovieReducer';
import { uiModalReducer } from '../reducers/uiModalReducer';
import { uiReducer } from '../reducers/uiReducer';
import { userStorageReducer } from '../reducers/userStorage';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers ({
  auth: authReducer,
  ui: uiReducer,
  uiModal: uiModalReducer,
  apiForm: apiReducer,
  activeMovie: activeMovieReducer,
  cart: cartReducer,
  movies: userStorageReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers( 
    applyMiddleware( thunk )
  )
)

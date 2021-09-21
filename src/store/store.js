import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { apiReducer } from '../reducers/apiReducer';
import { authReducer } from '../reducers/authReducer';
import { movieReducer } from '../reducers/movieReducer';
import { uiModalReducer } from '../reducers/uiModalReducer';
import { uiReducer } from '../reducers/uiReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers ({
  auth: authReducer,
  ui: uiReducer,
  apiForm: apiReducer,
  activeMovie: movieReducer,
  uiModal: uiModalReducer
})

export const store = createStore(
  reducers,
  composeEnhancers( 
    applyMiddleware( thunk )
  )
)

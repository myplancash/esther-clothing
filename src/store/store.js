import { compose, applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';


const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }

  console.log('type:  ', action.type);
  console.log('payload: ', action.payload);
  console.log('current state:', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

//runs before an action hits the reducer, catch actions before they hits reducer
const middleWares = [loggerMiddleware];

//functional programming concept a way pass multiple functions left to rigth
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
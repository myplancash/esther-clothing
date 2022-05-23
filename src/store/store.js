import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//runs before an action hits the reducer, catch actions before they hits reducer
const middleWares = [logger];

//functional programming concept a way pass multiple functions left to rigth
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
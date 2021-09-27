import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import addReducer from './modules/dictionary/reducer';

const middlewares = [thunk];
const rootReducer = combineReducers({addReducer});
const enhancer = applyMiddleware(...middlewares);


const store = createStore(rootReducer, enhancer);

export default store;
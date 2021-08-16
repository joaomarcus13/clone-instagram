import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './reducers/user';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;

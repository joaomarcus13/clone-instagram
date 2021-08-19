import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './reducers/user';
import postReducer from './reducers/post';
import applicationReducer from './reducers/application';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  post: postReducer,
  application: applicationReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;

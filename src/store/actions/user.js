import actionTypes from '../types';
import api from '../../services/api';
import { startLoading, stopLoading } from '../actions/application';
import { alert, getUsername } from '../../util/functions';

export const loginRequest = (payload) => {
  return async (dispatch) => {
    dispatch(startLoading({ msg: 'logging in...' }));
    let loggedInUser = await api.login(payload.email, payload.password);
    dispatch(stopLoading());
    if (typeof loggedInUser === 'string') {
      alert(loggedInUser, 'Ok', null);
    }
  };
};

export const login = (payload) => {
  return {
    type: actionTypes.USER_LOGGED_IN,
    payload,
  };
};

export const register = (payload) => {
  return async (dispatch) => {
    dispatch(startLoading({ msg: 'creating account...' }));

    const url = await api.storageImage(payload.fold, payload.photoProfile);

    const refUser = await api.createAccount(
      payload.email,
      payload.password,
      payload.name,
      url
    );

    dispatch(stopLoading());
    if (typeof refUser !== 'string') {
      // dispatch(
      //   login({
      //     displayName: payload.name,
      //     email: refUser.user.email,
      //     metadata: refUser.user.metadata,
      //     uid: refUser.user.uid,
      //     photoURL: url,
      //     username: getUsername(refUser.email),
      //   })
      // );
      console.log('antigo login  excluir');
    } else {
      alert(refUser, 'Ok', () => {
        payload.navigation.navigate('SignUp');
      });
    }
  };
};

export const follow = (payload) => {
  return async (dispatch) => {
    await api.follow(payload.uid, payload.profileId);

    dispatch({ type: actionTypes.FOLLOW, payload: payload.profileId });
  };
};
export const unfollow = (payload) => {
  return async (dispatch) => {
    await api.unfollow(payload.uid, payload.profileId);
    dispatch({ type: actionTypes.UNFOLLOW, payload: payload.profileId });
  };
};

export const logout = () => {
  return async (dispatch) => {
    await api.logout();
    dispatch({
      type: actionTypes.USER_LOGGED_OUT,
    });
  };
};

import actionTypes from '../types';
import auth from '@react-native-firebase/auth';

export const loginRequest = (payload) => {
  return async (dispatch) => {
    let loggedInUser;
    try {
      loggedInUser = await auth().signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      console.log('Login Successful!', loggedInUser);
    } catch (error) {
      console.warn('Login fail!! ');
    }
    // dispatch({
    //   type: actionTypes.USER_LOGGED_IN,
    //   payload: {
    //     user: loggedInUser.user,
    //   },
    // });
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
    let refUser;
    try {
      refUser = await auth().createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );

      await refUser.user.updateProfile({
        displayName: payload.name,
      });

      dispatch(
        login({
          displayName: payload.name,
          email: refUser.user.email,
          metadata: refUser.user.metadata,
          uid: refUser.user.uid,
          photoURL: refUser.user.photoURL,
        })
      );

      console.log('User account created & signed in!', refUser.user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await auth().signOut();
      console.log('User signed out!');
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: actionTypes.USER_LOGGED_OUT,
    });
  };
};

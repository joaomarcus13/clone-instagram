import actionTypes from '../types';

export const startLoading = (payload) => {
  return {
    type: actionTypes.START_LOADING,
    payload,
  };
};
export const stopLoading = (payload) => {
  return {
    type: actionTypes.STOP_LOADING,
  };
};

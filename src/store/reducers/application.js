import actionTypes from '../types';

const initialState = {
  loading: false,
  msg: '',
};

const reducer = (state = initialState, action) => {
  // console.log('reducer', action.payload);
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        msg: action.payload.msg,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
        msg: '',
      };
    default:
      return state;
  }
};

export default reducer;

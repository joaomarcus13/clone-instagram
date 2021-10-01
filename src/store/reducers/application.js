import actionTypes from '../types';

const initialState = {
  loading: false,
  msg: '',
  darkTheme: true,
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
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};

export default reducer;

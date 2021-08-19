import actionTypes from '../types';

const initialState = {
  image: null,
  caption: null,
  uid: null,
};

const reducer = (state = initialState, action) => {
  // console.log('reducer', action.payload);
  switch (action.type) {
    case actionTypes.SEND_IMAGE:
      return {
        ...state,
        image: action.payload.image,
        caption: action.payload.caption,
        uid: action.payload.uid,
      };

    default:
      return state;
  }
};

export default reducer;

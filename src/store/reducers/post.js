import actionTypes from '../types';

const initialState = {
  userPosts: [],
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action.payload);
  switch (action.type) {
    case actionTypes.SEND_IMAGE:
      return {
        ...state,
        // image: action.payload.image,
        // caption: action.payload.caption,
        // uid: action.payload.uid,
      };

    case actionTypes.WRITE_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

import actionTypes from '../types';

const initialState = {
  posts: [],
  stories: [],
};

const reducer = (state = initialState, action) => {
  console.log('reducer');
  switch (action.type) {
    case actionTypes.SEND_IMAGE:
      return {
        ...state,
        // image: action.payload.image,
        // caption: action.payload.caption,
        // uid: action.payload.uid,
      };

    case actionTypes.STORE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actionTypes.STORE_STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    // case actionTypes.WRITE_FEED_POSTS:
    //   console.log('write posts', action.payload);
    //   return {
    //     ...state,
    //     feedPosts: action.payload,
    //   };
    // case actionTypes.WRITE_EXPLORER_POSTS:
    //   return {
    //     ...state,
    //     explorerPosts: action.payload,
    //   };
    default:
      return state;
  }
};

export default reducer;

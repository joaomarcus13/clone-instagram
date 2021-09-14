import actionTypes from '../types';

const initialState = {
  name: '',
  email: '',
  metadata: null,
  uid: null,
  photoURL: null,
  username: '',
  followers: [],
  followings: [],
  // user: {},
};

// {
//   "displayName": null,
//   "email": "joaomarcus13@hotmail.com",
//   "emailVerified": false,
//   "isAnonymous": false,
//   "metadata":
//     {"creationTime": 1628775588449,
//     "lastSignInTime": 1628778950742
//   },
//     "phoneNumber": null,
//     "photoURL": null,
//     "providerData": [[Object]],
//     "providerId": "firebase",
//     "tenantId": null,
//     "uid": "UGMz0dNuOVNeeMHgs5yylrfmt7s2"
//   }

const reducer = (state = initialState, action) => {
  // console.log('reducer', action.payload);
  switch (action.type) {
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        ...action.payload,
        // displayName: action.payload.displayName,
        // email: action.payload.email,
        // metadata: action.payload.metadata,
        // uid: action.payload.uid,
        // photoURL: action.payload.photoURL,
      };
    // case actionTypes.USER_REGISTER:
    //   return {
    //     ...state,
    //     displayName: action.payload.displayName,
    //     email: action.payload.email,
    //     metadata: action.payload.metadata,
    //     uid: action.payload.uid,
    //     photoURL: action.payload.photoURL,
    //   };
    case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        username: '',
        email: '',
        metadata: null,
        uid: null,
        photoURL: null,
        followers: [],
        followings: [],
      };
    case actionTypes.FOLLOW:
      return {
        ...state,
        followings: [...state.followings, action.payload],
      };
    case actionTypes.UNFOLLOW:
      let index = state.followings.indexOf(action.payload);
      let arr = [...state.followings];
      arr.splice(index, 1);
      return {
        ...state,
        followings: arr,
      };
    default:
      return state;
  }
};

export default reducer;

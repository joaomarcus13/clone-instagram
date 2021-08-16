import actionTypes from '../types';

const initialState = {
  // isLoggedIn: false,
  // name: null,
  // username: null,
  // email: null,
  // password: null,
  // bio: null,
  user: {},
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
  console.log('reducer', action.payload);
  switch (action.type) {
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload.user,
      };
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        user: action.payload.user,
      };
    case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;

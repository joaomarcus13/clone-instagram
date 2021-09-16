import api from '../../services/api';
import actionTypes from '../types';
import { startLoading, stopLoading } from '../actions/application';
import { alert } from '../../util/functions';

export function sendImage(payload) {
  return async (dispatch, getState) => {
    dispatch(startLoading({ msg: 'posting...' }));

    const url = await api.storageImage(payload.fold, payload.image);
    if (!url) {
      alert('error posting', 'Ok', () => {
        payload.navigation.goBack();
      });
    }
    const user = {
      uid: getState().user.uid,
      name: getState().user.name,
      photoURL: getState().user.photoURL,
    };
    const post = {
      user,
      url: url,
      createdAt: new Date(),
      caption: payload.caption || '',
    };

    await api.sendPostOrStory(payload.fold, post, getState().user.uid);

    dispatch(stopLoading());

    payload.navigation.goBack();
  };
}

export function storePosts(payload) {
  return {
    type: actionTypes.STORE_POSTS,
    payload,
  };
}
export function storeStories(payload) {
  return {
    type: actionTypes.STORE_STORIES,
    payload,
  };
}
// export function writePostExplorer(payload) {
//   return {
//     type: actionTypes.WRITE_EXPLORER_POSTS,
//     payload,
//   };
// }
// export function writePostFeed(payload) {
//   return {
//     type: actionTypes.WRITE_FEED_POSTS,
//     payload,
//   };
// }

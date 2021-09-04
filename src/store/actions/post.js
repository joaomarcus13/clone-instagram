import api from '../../services/api';
import { startLoading, stopLoading } from '../actions/application';
import { alert } from '../../util/alert';

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
      name: getState().user.displayName,
      photoURL: getState().user.photoURL,
    };
    const post = {
      user,
      url: url,
      caption: payload.caption || '',
    };

    await api.sendPostOrStory(payload.fold, post);

    dispatch(stopLoading());

    payload.navigation.goBack();
  };
}

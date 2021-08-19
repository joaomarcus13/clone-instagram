import types from '../types';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

export function sendImage(payload) {
  return async (dispatch, getState) => {
    const refStorage = storage().ref(`${payload.fold}/image${Date.now()}`);
    const refDatabase = database().ref(payload.fold);
    try {
      await refStorage.putString(payload.image, 'base64');

      const url = await refStorage.getDownloadURL();

      // console.log({
      //   user: getState().user.uid,
      //   url: url,
      //   caption: payload.caption,
      // });

      refDatabase.push({
        user: {
          uid: getState().user.uid,
          name: getState().user.displayName,
          photoURL: getState().user.photoURL,
        },
        url: url,
        caption: payload.caption,
      });

      // database()
      //   .ref(payload.fold)
      //   .push({
      //     name: 'michael',
      //     age: 31,
      //   })
      //   .then(() => console.log('Data set.'));

      payload.navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
}

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { photoProfileDefault } from '../util/constants';

async function storageImage(fold, image) {
  try {
    const refStorage = storage().ref(`${fold}/image${Date.now()}`);
    await refStorage.putString(image, 'base64');
    const url = await refStorage.getDownloadURL();
    return url;
  } catch (error) {
    console.log(error);
    if (fold !== 'profile') {
      return null;
    }
    return photoProfileDefault;
  }
}

async function createAccount(email, password, name, url) {
  let refUser;
  try {
    refUser = await auth().createUserWithEmailAndPassword(email, password);

    await refUser.user.updateProfile({
      displayName: name,
      photoURL: url,
    });

    console.log('User account created & signed in!', refUser.user);
    return refUser;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return 'That email address is already in use!';
    }

    if (error.code === 'auth/invalid-email') {
      return 'That email address is invalid!';
    }
    console.error(error);
    return 'error creating account';
  }
}

async function login(email, password) {
  let loggedInUser;
  try {
    loggedInUser = await auth().signInWithEmailAndPassword(email, password);
    return loggedInUser;
  } catch (error) {
    return 'Login fail!!';
  }
}

async function logout() {
  try {
    await auth().signOut();
    console.log('User signed out!');
  } catch (error) {
    console.log(error);
  }
}

async function sendPostOrStory(fold, post) {
  try {
    const refDatabase = database().ref(fold);
    refDatabase.push(post);
  } catch (error) {
    console.log('error posting ', error);
  }
}

export default { storageImage, createAccount, login, logout, sendPostOrStory };

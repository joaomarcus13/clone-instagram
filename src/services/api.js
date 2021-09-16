import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { photoProfileDefault } from '../util/constants';
import { getUsername } from '../util/functions';

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

    // await refUser.user.updateProfile({
    //   displayName: name,
    //   photoURL: url,
    // });

    await createUser(email, name, getUsername(email), url, refUser.user.uid);

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

async function createUser(email, name, username, photoURL, uid) {
  try {
    const refDatabase = firestore().collection('users').doc(uid);
    refDatabase.set({ email, name, username, photoURL });
  } catch (error) {
    console.log('error create user ', error);
    throw new Error('error');
  }
}

async function getUser(uid) {
  try {
    const user = await firestore().collection('users').doc(uid).get();
    return user.data();
  } catch (error) {
    return {};
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

async function sendPostOrStory(fold, post, userId) {
  try {
    const refDatabase = database().ref(fold);
    refDatabase.push(post);
  } catch (error) {
    console.log('error posting ', error);
  }
}

async function follow(userId, followerId) {
  try {
    const refDatabase = firestore().collection('users').doc(userId);
    refDatabase.update({
      following: firestore.FieldValue.arrayUnion(followerId),
    });
    const refDatabaseFollower = firestore().collection('users').doc(followerId);
    refDatabaseFollower.update({
      followers: firestore.FieldValue.arrayUnion(userId),
    });
  } catch (error) {
    console.log('error', error);
  }
}
async function unfollow(userId, followerId) {
  try {
    const refDatabase = firestore().collection('users').doc(userId);
    refDatabase.update({
      following: firestore.FieldValue.arrayRemove(followerId),
    });
    const refDatabaseFollower = firestore().collection('users').doc(followerId);
    refDatabaseFollower.update({
      followers: firestore.FieldValue.arrayRemove(userId),
    });
  } catch (error) {
    console.log('error', error);
  }
}

export default {
  storageImage,
  createAccount,
  login,
  logout,
  sendPostOrStory,
  getUser,
  follow,
  unfollow,
};

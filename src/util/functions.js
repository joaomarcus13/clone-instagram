import { Alert } from 'react-native';

export const alert = (title, btn, fn = null) => {
  Alert.alert(title, null, [{ text: btn, onPress: fn }]);
};

export const base64 = (content) => `data:image/jpg;base64,${content}`;

export const getUsername = (name) => name.substr(0, name.indexOf('@'));

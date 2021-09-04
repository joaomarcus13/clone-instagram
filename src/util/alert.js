import { Alert } from 'react-native';

export const alert = (title, btn, fn = null) => {
  Alert.alert(title, null, [{ text: btn, onPress: fn }]);
};

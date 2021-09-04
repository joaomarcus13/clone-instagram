import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/user';
import * as Styled from './styles';

export default function SignUpNext({ route }) {
  // console.log(route);
  // const dispatch = useDispatch();

  const navigator = useNavigation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    // dispatch(loginRequest({ name: username, email: username, password }));
    if (!name || !password) {
      console.log('nome ou senha nao informados');
      return;
    }
    navigator.navigate('SignUpAddPhotoProfile', {
      email: route.params.email,
      name,
      password,
    });
    // dispatch(register({ email: route.params.email, name, password }));
  }

  return (
    <Styled.Container>
      <Styled.ContainerComponent>
        <Styled.Text.H1>Name and Password</Styled.Text.H1>

        <Styled.Input
          onChangeText={(text) => setName(text)}
          defaultValue={name}
          placeholder="Name"
          selectionColor={'gray'}
        />

        <Styled.Input
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
          secureTextEntry={true}
          placeholder="Password"
          selectionColor={'gray'}
        />

        <Styled.Button onPress={handleRegister} activeOpacity={0.8}>
          <Styled.Text.Button>Continue</Styled.Text.Button>
        </Styled.Button>
      </Styled.ContainerComponent>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

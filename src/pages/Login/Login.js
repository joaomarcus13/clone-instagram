import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../store/actions/user';
import logo from '../../assets/icons/instagram-logo-white.png';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading/Loading';
import * as Styled from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation();
  const { loading, msg } = useSelector((state) => state.application);

  function handleLogin() {
    dispatch(
      loginRequest({
        name: username,
        email: username,
        password,
      })
    );
  }

  function handleSignUp() {
    navigator.navigate('SignUp');
  }

  return (
    <>
      {loading && <Loading text={msg} />}
      <Styled.Container>
        <Styled.ContainerComponent>
          <Styled.Logo source={logo} />
          <Styled.Input
            onChangeText={(text) => setUsername(text)}
            defaultValue={username}
            placeholder="Phone number, email or username"
            selectionColor={'gray'}
          />
          <Styled.Input
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
            secureTextEntry={true}
            selectionColor={'gray'}
          />
          <Styled.Button onPress={handleLogin} activeOpacity={0.8}>
            <Styled.TextButton>Log in</Styled.TextButton>
          </Styled.Button>

          <Styled.ViewInline>
            <Styled.H2>Forgot your login details? </Styled.H2>
            <Styled.H2Bold>get help siging</Styled.H2Bold>
          </Styled.ViewInline>
          <Styled.ViewInline>
            <Styled.Line />
            <Styled.H1>OR</Styled.H1>
            <Styled.Line />
          </Styled.ViewInline>
          <Styled.ViewInline>
            <Styled.Icons.Facebook name="facebook" />
            <Styled.TextFacebook>Log in with Facebook</Styled.TextFacebook>
          </Styled.ViewInline>
        </Styled.ContainerComponent>

        <Styled.Footer>
          <Styled.ViewInline>
            <Styled.H2>dont have account? </Styled.H2>
            <TouchableOpacity activeOpacity={1} onPress={handleSignUp}>
              <Styled.H2Bold>sing up</Styled.H2Bold>
            </TouchableOpacity>
          </Styled.ViewInline>
        </Styled.Footer>
      </Styled.Container>
    </>
  );
}

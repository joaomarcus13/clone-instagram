import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import logo from '../../assets/icons/instagram-logo-white.png';
import * as Styled from './styles';

export default function Login() {
  return (
    <Styled.Container>
      <Styled.ContainerComponent>
        <Styled.Logo source={logo} />
        <Styled.Input
          placeholder="Phone number, email or username"
          selectionColor={'gray'}
        />
        <Styled.Input
          placeholder="Password"
          secureTextEntry={true}
          selectionColor={'gray'}
        />
        <Styled.Button>
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
          <Styled.H2Bold>sing up</Styled.H2Bold>
        </Styled.ViewInline>
      </Styled.Footer>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

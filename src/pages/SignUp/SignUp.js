import React from 'react';
import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';
import isEmail from 'validator/lib/isEmail';

import * as Styled from './styles';
import { Avatar } from '../../style/global';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigator = useNavigation();

  const [email, setEmail] = useState('');

  function handleNext() {
    // dispatch(loginRequest({ name: username, email: username, password }));
    if (email && isEmail(email)) {
      navigator.navigate('SignUpNext', { email });
    }
  }

  return (
    <Styled.Container>
      <Styled.ContainerComponent>
        <Styled.LogoUser />

        <Styled.Line />
        <Styled.Form>
          <Styled.Input
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
            placeholder="Email"
            selectionColor={'gray'}
          />
          {/* <Avatar size={100} source={logo} /> */}

          <Styled.Button onPress={handleNext} activeOpacity={0.8}>
            <Styled.Text.Button>Next</Styled.Text.Button>
          </Styled.Button>
        </Styled.Form>
      </Styled.ContainerComponent>

      <Styled.Footer>
        <Styled.ViewInline>
          <Styled.Text.H2>Already have an account </Styled.Text.H2>
          <Styled.Text.H2Bold>Log in.</Styled.Text.H2Bold>
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

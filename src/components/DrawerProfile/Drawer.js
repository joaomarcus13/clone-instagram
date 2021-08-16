import React from 'react';
import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import logo from '../../assets/icons/instagram-logo-white.png';
import { useNavigation } from '@react-navigation/native';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { nameIcons } from '../../style/icons';

export default function Drawer({ navigation }) {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.TextHeader>joamarcus13</Styled.TextHeader>
      </Styled.Header>
      <Styled.Items>
        <DrawerItem
          label="Archive"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Your Activity"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="QR Code"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Saved"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Close Friends"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Discover People"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
        />
      </Styled.Items>

      <Styled.Footer>
        <DrawerItem
          label="Settings"
          style={styles.item}
          icon={({ color, size }) => (
            <Styled.Icons.Settings name={nameIcons.settings} />
          )}
          labelStyle={styles.label}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
      </Styled.Footer>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    marginLeft: -20,
    fontSize: 16,
    height: 24,
  },
});

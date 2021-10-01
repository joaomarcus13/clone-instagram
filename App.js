/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import Feed from './src/pages/Feed/Feed';
import themes from './src/style/themes';

////////////
import MainRoutes from './src/routes';
// import MainRoutes from './src/routes/StackNavigator';
// import MainRoutes from './src/routes/TabNavigator';
// import MainRoutes from './src/routes/DrawerFeed';
import { Provider } from 'react-redux';
import store from './src/store';
import { useSelector } from 'react-redux';

// const darkTheme = false;
const App = () => {
  const darkTheme = useSelector((state) => state.application.darkTheme);
  const background = darkTheme ? themes.darkTheme.bg : 'white';
  const barstyle = darkTheme ? 'light-content' : 'dark-content';
  return (
    <ThemeProvider theme={darkTheme ? themes.darkTheme : themes.lightTheme}>
      <MainRoutes />
      <StatusBar backgroundColor={background} barStyle={barstyle} />
    </ThemeProvider>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default AppWrapper;

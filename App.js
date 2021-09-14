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

const darkTheme = true;

const App = () => {
  const background = darkTheme ? themes.darkTheme.bg : 'white';
  const barstyle = darkTheme ? 'light-content' : 'dark-content';
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme ? themes.darkTheme : themes.lightTheme}>
          <MainRoutes />
          <StatusBar backgroundColor={background} barStyle={barstyle} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

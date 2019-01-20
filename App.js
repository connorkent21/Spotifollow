/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './components/Home';
import Favorites from './components/Favorites';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Favorites: { screen: Favorites },

},
{
  initialRouteName: 'Home',
  headerMode: 'none',
}
);


const Application = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

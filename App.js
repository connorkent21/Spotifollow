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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Ionicons';

import spotifollowTheme from './assets/spotifollowTheme';
const { colors, sizing } = spotifollowTheme;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createMaterialBottomTabNavigator({
  Home: { screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={25} name='md-search' style={{ color: tintColor }}/>
          ),
      title: 'Search'
    }
   },
  Favorites: { screen: Favorites,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={25} name='md-star' style={{ color: tintColor }} />
          ),
    },
  },
  Feed: { screen: Favorites,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
            <Icon size={25} name='md-paper' style={{ color: tintColor }} />
          ),
    },
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
  activeColor: 'white',
  inactiveColor: 'black',
  barStyle: { backgroundColor: colors.green },
  shifting: true,
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

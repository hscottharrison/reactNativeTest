import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import ComponentOne from './App/Components/ComponentOne/ComponentOne';
import ProfileScreen from './App/Components/Profile';

import {StackNavigator,} from 'react-navigation';

export default App = StackNavigator({
  Home: { screen: ComponentOne },
  Profile: { screen: ProfileScreen },
});

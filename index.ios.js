/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './js/Login.js'
import Root from './js/Root.js'

export default class JianZhiYun extends Component {
  render() {
    return (
      <Root/>
    );
  }
}


AppRegistry.registerComponent('JianZhiYun', () => JianZhiYun);

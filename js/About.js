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
  View,
  Image
} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('../resource/timg.jpg')}>
          <Image style={{marginLeft:20,marginTop:100,marginRight:20,height:100,resizeMode: 'center',}} source={require('../resource/about_tit.png')}/>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  bg:{
    flex:1,
  },
});


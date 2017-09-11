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
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

export default class Help extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.send}>
        <TextInput
        style={{marginTop:5,marginLeft:10,width:ScreenWidth-80,height: 40, borderColor: 'white', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder='请输入内容'
        returnKeyType="done"/>

        <TouchableOpacity onPress={this.sendClick.bind(this)}>
        <View style={{marginLeft:10,marginTop:5,width:50,height:40,backgroundColor:'#94E24A',alignItems:'center',  
              justifyContent: 'center', borderWidth:1,borderColor:'#94E24A',borderRadius:5}}> 
        <Text style={{fontSize:14,color:'white'}}>发送</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  sendClick(){
    console.log('发送')
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  send:{
    flexDirection:'row',
    width:ScreenWidth,
    height:50,
    marginTop:ScreenHeight-50-64,
    backgroundColor:'#D6D6D6'
  },
});


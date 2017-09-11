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
export default class ChangePhone extends Component {
  constructor(props){
        super(props)
        this.state = {
            UserName:'',
            oldPhone:'',
            newPhone:'',
            code:'',
            UserID:'',
            Token:'',
        }
    }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bg}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({oldPhone:text})}
        placeholder='请输入原手机号'
        returnKeyType="done"/>
        </View>

        <View style={styles.bg}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({newPhone:text})}
        placeholder='请输入新手机号'
        returnKeyType="done"/>
        </View>

        <View style={styles.bgCode}>

        <View style={styles.code}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({code:text})}
        placeholder='验证码'
        returnKeyType="done"/>
        </View>

        <TouchableOpacity onPress={this.getCodeClick.bind(this)}>
         <View style={styles.send}>
         <Text style={{color:'white'}}>获取验证码</Text>
         </View>
         </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={this.sureClick.bind(this)}>
        <View style={styles.buttonStyle}>
        <Text style={{color:'white',fontSize:15}}>确定</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
  sureClick(){
    console.log('确定')
  }
  getCodeClick(){
    console.log('获取验证码')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bg:{
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    width:ScreenWidth-40,
    height:45,
    backgroundColor:'#E5E2E2'
  },
  bgCode:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    width:ScreenWidth-40,
    height:45,
    //backgroundColor:'red'
  },
  input:{
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    height: 35
  },
  code:{
    width:ScreenWidth/2-40,
    height:45,
    backgroundColor:'#E5E2E2'
  },
  buttonStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:50,
    marginRight:50,
    marginTop:30,
    width:ScreenWidth-100,
    height:40,
    backgroundColor:'orange'
  },
  send:{
    alignItems:'center',  
    justifyContent: 'center',
    marginLeft:40,
    width:ScreenWidth/2-40,
    height:45,
    backgroundColor:'#3B919F'
  }
});


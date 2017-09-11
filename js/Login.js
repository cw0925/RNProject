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
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
  Navigator,
  Alert,
  Linking,
  AsyncStorage,
  Toast
} from 'react-native';

import RNAsyncStorage from './RNAsyncStorage.js';

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

var n = 1

export default class Login extends Component {

  constructor(props){
        super(props)
        this.state = {
            name:'',
            password:'',
            normalImg:require('../resource/remember.png'),
        }
    }
  render() {
    console.log(ScreenWidth)
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('../resource/bg.jpg')}/>
        <View style={styles.bottomView}>

        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'white',height:50,marginLeft:50,marginRight:50}}>
        <Image style={{width:23,height:23,marginLeft:5,marginTop:20}} source={require('../resource/username.png')}/>
        <TextInput
              style={{marginLeft:10,marginTop:13,width:ScreenWidth-170,height:40}}
              onChangeText={(text) => this.setState({name:text})}
              clearButtonMode="while-editing"
              returnKeyType="done"
              placeholder='请输入账号'/>
        </View>
        <Text style={{backgroundColor:'#C7C7C7',height:1,marginLeft:50,marginRight:50}}></Text>

        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'white',height:50,marginLeft:50,marginRight:50}}>
        <Image style={{width:23,height:23,marginLeft:5,marginTop:20}} source={require('../resource/password.png')}/>
        <TextInput
              style={{marginLeft:10,marginTop:13,width:ScreenWidth-170,height:40}}
              onChangeText={(text) => this.setState({password:text})}
              secureTextEntry={true}
              clearButtonMode="while-editing"
              returnKeyType="done"
              placeholder='请输入密码'/>
        </View>
        <Text style={{backgroundColor:'#C7C7C7',height:1,marginLeft:50,marginRight:50}}></Text>

        <View style={{alignItems:'flex-start',justifyContent:'center',backgroundColor:'white',height:40,marginLeft:50,marginRight:50}}>
        <TouchableOpacity onPress={this.rememberClick.bind(this)}>
        <Image style={{width:25,height:25}} source={this.state.normalImg}/>
        </TouchableOpacity>
        <Text style={{marginLeft:30,marginTop:-20}}>记住密码</Text>
        <TouchableOpacity onPress={this.forgetClick.bind(this)}>
        <Text style={{marginLeft:210,marginTop:-15,textDecorationLine:'underline'}}>忘记密码</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.loginClick.bind(this)}>
        <View style={{marginTop:10,backgroundColor:'orange',alignItems:'center', justifyContent: 'center',marginLeft:50,marginRight:50,height:40,width:ScreenWidth-100, borderWidth:1,borderColor:'white',borderRadius:20}}>
          <Text style={{textAlign: 'center',color:'white'}}>登录</Text>
        </View>
        </TouchableOpacity>

        <Text style={{marginTop:30,textAlign: 'center',height:25}}>河南健之云信息科技有限公司</Text>
        <TouchableOpacity onPress={this.callPhoneClick.bind(this)}>
        <Text style={{textAlign: 'center',height:25}}>0371-63391200</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  //登录
  loginClick(){
    
    // const { navigate } = this.props.navigation;
    //             navigate('Check');
    if (this.state.name=='') {
      Alert.alert('提示','账号不能为空！',
            [
              {text: '确定', onPress: () => console.log('Ask me later pressed')},
            ]
          )
    }else if(this.state.password==''){
      Alert.alert('提示','密码不能为空！',
            [
              {text: '确定', onPress: () => console.log('Ask me later pressed')},
            ]
          )
    }else{
       let data = {"UserName":this.state.name,"Password":this.state.password}
       let formData = new FormData();
       formData.append("values",JSON.stringify(data)); 
       //http://192.168.0.52:8078/Management/LoginApp
      fetch('http://192.168.0.52:8078/Management/LoginApp', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: formData   
        }).then((response) => response.json())//1
            .then((jsonData) => {//2
              console.log(jsonData)
              if (jsonData.Result == 0) {
                if (this.state.normalImg == require('../resource/remember_selected.png')) {
                      AsyncStorage.setItem('password', this.state.password);
                  }
                  let UserName = jsonData.UserName
                  let SchoolID = jsonData.SchoolID
                  let UserID = jsonData.UserID
                  let Token = jsonData.Token
                  //console.log('UserID'+UserID)
                  //保存本地数据
                  global.storage.save({key:'userInfo',data:{
                            UserName:UserName,
                            UserID: UserID,
                            Token:Token
                      }})
                const { navigate } = this.props.navigation;
                navigate('Check',{
                  'SchoolID':SchoolID,
                  'UserID':UserID,
                  'Token':Token
                });
              }else{
                 Alert.alert('提示','账号或密码错误！',
                              [
                                {text: '确定', onPress: () => console.log('Ask me later pressed')},
                              ]
                            )
              }
            }).catch(error=>{
              Alert.alert('提示','网络错误',
            [
              {text: '取消', onPress: () => console.log('Ask me later pressed')},
            ]
          )
            });
    }
  }
  //记住密码
  rememberClick(){
    n++
    if (n%2==0) {
      this.setState({
                normalImg: require('../resource/remember_selected.png')
            });
    }else{
      this.setState({
                normalImg: require('../resource/remember.png')
            });
    }
  }
  //忘记密码
  forgetClick(){
    
      const { navigate } = this.props.navigation;
      navigate('Addressbook');
  }
  //拨打电话
  callPhoneClick(){
    Linking.openURL('tel:0371-63391200')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bg:{
    width:ScreenWidth,
    height:ScreenHeight-300,
    resizeMode:'stretch'
  },
  bottomView:{
    width:ScreenWidth,
    height:300,
    marginBottom:ScreenHeight-300,
    backgroundColor:'white'
  },
});
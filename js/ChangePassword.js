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
  TouchableOpacity,
  Alert
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width
export default class ChangePassword extends Component {
  constructor(props){
        super(props)
        this.state = {
            UserName:'',
            oldPw:'',
            newPw:'',
            confirmPw:'',
            UserID:'',
            Token:'',
        }
    }
  //读取本地数据
  componentDidMount(){
    global.storage.load({
    key: 'userInfo',
  }).then(ret => {
    console.log('结果：'+ret.UserID+'token:'+ret.Token);
    this.setState({
      UserName:ret.UserName,
      UserID:ret.UserID,
      Token:ret.Token
    });
  })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.bg}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({oldPw:text})}
        placeholder='请输入原密码'
        returnKeyType="done"/>
        </View>

        <View style={styles.bg}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({newPw:text})}
        placeholder='请输入新密码'
        returnKeyType="done"/>
        </View>

        <View style={styles.bg}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({confirmPw:text})}
        placeholder='再次输入新密码'
        returnKeyType="done"/>
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
    let data = {"Password":this.state.newPw,"UserID":this.state.UserID,"ConfirmPassword":this.state.confirmPw,"OldPassword":this.state.oldPw,"UserName":this.state.UserName}
       let formData = new FormData();
       formData.append("values",JSON.stringify(data));
       formData.append("userid",this.state.UserID);  
  
      fetch('http://192.168.0.52:8078/Management/UpdatePassword', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: formData   
        }).then((response) => response.json())//1
            .then((jsonData) => {//2
              console.log(jsonData)
              if (jsonData.Result == 0) {
                 Alert.alert('提示','密码'+jsonData.Content,
            [
              {text: '确定', onPress: this.pushLogin.bind(this)},
            ]
          )
              };
            }).catch(error=>{
              Alert.alert('提示','网络错误',
            [
              {text: '取消', onPress: () => console.log('Ask me later pressed')},
            ]
          )
            });
  }
  pushLogin(){
      const { navigate } = this.props.navigation;
      navigate('Login');
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
  input:{
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    height: 35
  },
  buttonStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:50,
    marginRight:50,
    marginTop:20,
    width:ScreenWidth-100,
    height:40,
    backgroundColor:'orange'
  }
});


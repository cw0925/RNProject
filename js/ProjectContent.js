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
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width

export default class ProjectContent extends Component {
  constructor(props){
        super(props)
        this.state = {
            code:''//返回的扫码信息
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{marginTop:10,marginLeft:20,marginRight:20,height: 40, borderColor: '#CDCDCD', borderWidth: 1}}
        onChangeText={(text) => this.setState({code:text})}
        value={this.state.code}
        placeholder='请输入身份证号'/>

        <TouchableOpacity onPress={this.scanClick.bind(this)}>
        <View style={{marginTop:10,backgroundColor:'orange',alignItems:'center', justifyContent: 'center',marginLeft:50,marginRight:50,height:40,width:ScreenWidth-100}}>
          <Text style={{textAlign: 'center',color:'white'}}>扫一扫</Text>
        </View>
        </TouchableOpacity>

      <View style={{marginTop:10,height:265,backgroundColor:'#E7E7E7'}}>

        <View style={{height:30,backgroundColor:'#E7E7E7',flexDirection:'row'}}>
          
          <Text style={{marginLeft:20,marginTop:10,height:30,fontSize:16}}>学生信息</Text>

          <TouchableOpacity onPress={this.scanClick.bind(this)}>
          <View style={{marginTop:5,backgroundColor:'#3B919F',alignItems:'center', justifyContent: 'center',marginLeft:ScreenWidth-160,height:30,width:60}}>
          <Text style={{textAlign: 'center',color:'white'}}>查询</Text>
          </View>
          </TouchableOpacity>

        </View>

        <Text style={{marginTop:10,backgroundColor:'#D3D0D1',width:ScreenWidth,height:1}}></Text>

        <View >
        <Text style={{width:ScreenWidth/2,height:30,marginTop:10,marginLeft:20}}>姓名:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>性别:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>出生日期:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>民族:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>身份证:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>年级:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>班级:</Text>
        </View>

      </View>
      <Text style={{marginTop:20,marginLeft:20,fontSize:16}}>检测结果录入</Text>
      </View>
    );
  }
  scanClick(){
    console.log('扫描身份证')
    const { navigate } = this.props.navigation;
    navigate('Scanner',{
                   // 跳转的时候携带一个参数去下个页面
                   callback: (data)=>{
                    console.log('返回的扫码信息'+data)
                         this.setState({
                          code: data
                        });// 打印值为：'回调参数'
                     }
                   });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});


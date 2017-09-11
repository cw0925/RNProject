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
  Dimensions
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width
export default class Examine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{marginTop:10,marginLeft:20,marginRight:20,height: 40, borderColor: '#CDCDCD', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder='请输入学生姓名'/>

        <View style={{marginTop:10,width:ScreenWidth,height:200,backgroundColor:'#E7E7E7'}}>
        <Text style={{marginLeft:10,marginTop:10,fontSize:17}}>学生信息</Text>
        <Text style={{backgroundColor:'#D3D0D1',width:ScreenWidth,height:1,marginTop:10}}></Text>
        <View >
        <Text style={{width:ScreenWidth/2,height:30,marginTop:10,marginLeft:20}}>姓名:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>性别:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>年龄:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>班级:</Text>
        <Text style={{width:ScreenWidth/2,height:30,marginLeft:20}}>学校:</Text>
        </View>
        </View>

        <Text style={{marginLeft:20,marginTop:10,fontSize:17,color:'#3B919F'}}>查验结果</Text>
        <Text style={{backgroundColor:'#D3D0D1',width:ScreenWidth,height:1,marginTop:10}}></Text>

        <View style={{flexDirection:"row",width:ScreenWidth-20,marginTop:10,marginLeft:10}}>
          <View  style={styles.recordTextView}>  
            <Text style={styles.record}> 接种记录</Text>  
          </View> 
          <View  style={styles.unrecordTextView}>  
            <Text style={styles.unrecord}>未完成接种记录</Text>  
          </View> 
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  recordTextView:{  
    flexDirection:'column',  
    justifyContent:'center',  
    alignItems:'center',
    height:30,
    borderWidth:1,
    borderColor:'#3B919F',
    borderRadius:5 ,
    backgroundColor:'#3B919F' 
  },
  unrecordTextView:{
    flexDirection:'column',  
    justifyContent:'center',  
    alignItems:'center',
    height:30, 
    marginLeft:20,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'red',
    borderRadius:5 ,
  },
  record:{  
    fontSize:14,  
    color:'white', 
  } ,
  unrecord:{  
    fontSize:14,  
    color:'red',  
  }  
});


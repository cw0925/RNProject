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
  Button,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from 'react-native';
import moment from 'moment';

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

export default class Check extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={{margin:10}}>{moment().format('YYYY-MM-DD')+"本班共有因病缺勤0名学生 其中传染病0人 因事缺勤0名学生 其他缺勤0名学生"}</Text>
      <TouchableOpacity onPress={this.checkClick.bind(this)}>
        <View style={{marginTop:30,backgroundColor:'orange',alignItems:'center', justifyContent: 'center',marginLeft:100,marginRight:100,height:40,width:ScreenWidth-200, borderWidth:1,borderColor:'white',borderRadius:5}}>
          <Text style={{textAlign: 'center',color:'white'}}>审核</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
  checkClick(){
    console.log('审核')
  }
  componentDidMount(){

  //    global.storage.load({
  //   key: 'a',
  // }).then(ret => {
  //   console.log('结果：'+ret.userid);
  //   this.setState({ user: ret });
  // })

     let data = {'SchoolID':this.props.navigation.state.params.SchoolID,'UserID':this.props.navigation.state.params.UserID}

     let formData = new FormData();
     formData.append("values",JSON.stringify(data));
     formData.append("token",this.props.navigation.state.params.Token);
     formData.append("userid",this.props.navigation.state.params.UserID);
     formData.append("url",'/Management/SaveHeadmasterAttendanceCheck');

    fetch('http://192.168.0.52:8078/Management/SaveHeadmasterAttendanceCheck', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:formData

        }).then((response) => response.json())//1
            .then((jsonData) => {//2
              console.log(jsonData)
              if (jsonData.Result==0) {
                alert('成功！')
              };
              console.log(jsonData)
            }).catch(error=>{
              //console.error('error'+error)
              alert(error)
            });
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


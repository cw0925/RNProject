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
  Image,
  FlatList,
  AsyncStorage
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width

var data = []
var UserID = ''
var Token = ''

export default class PersonInfo extends Component {
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
  //item
  _renderItemView = (item) => {
        return (
        <TouchableOpacity  onPress={this.clickItem.bind(this,item)} activeOpacity={1}>
          <View style={styles.contentView}>
            <View style={styles.item}>
              <Image style={styles.itemIcon} source={item.icon}/>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>

          </View>
        </TouchableOpacity>
        )
    };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <Image style={styles.bg} source={require('../resource/bg.jpg')}/>
          <FlatList ref={(flatList)=>this._flatList = flatList} style={styles.list}
                          data={data}
                          renderItem={({item}) => this._renderItemView(item)}
                          onViewableItemsChanged={(info)=>{
                          console.log(info);
                    }}/>
        </View>
      </View>
    );
  }
  componentDidMount(){
 //读取数据
     global.storage.load({
    key: 'userInfo',
  }).then(ret => {
    //console.log('结果：'+ret.UserID+'token:'+ret.Token);
    // this.setState({
    //   UserID:ret.UserID,
    //   Token:ret.Token
    // });
  UserID = ret.UserID
  Token = ret.Token
  console.log('结果：'+UserID);
  })
console.log('请求调用'+UserID)
     let formData = new FormData();
     formData.append("values",UserID);
     formData.append("url",'/Management/GetMyInformation');
     formData.append("token",Token);
     formData.append("userid",UserID);

     //let data = {"values":UserID,"url":'/Management/GetMyInformation',"token":Token,"userid":UserID}
console.log(formData)
    fetch('http://192.168.0.52:8078/Management/GetMyInformation', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:formData
        }).then((response) => response.json()).then((jsonData) => {
          console.log(jsonData)
        }).catch(error=>{
              alert(error)
            });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg:{
    width:ScreenWidth-40,
    height:100,
  },
  contentView:{
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft:20,
    marginTop:20,
    marginRight:20,
    width:ScreenWidth-40,
    height:250,
    backgroundColor:'gray',
    borderWidth:1,
    borderColor:'white',
    borderRadius:8
  },
});


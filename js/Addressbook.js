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
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

export default class Addressbook extends Component {
  //item
  _renderItemView = (item) => {
        return (
            <View style={styles.item}>
              <TouchableOpacity key={item.key}  onPress={this.clickItem.bind(this,item)} activeOpacity={1}>
                 <Text style={styles.roomText}>{item.room}</Text>
                 <Image style={styles.itemImg} />
                 <Text style={styles.nameText}>{item.name}</Text>
                 <Text style={styles.phoneText}>{item.phone}</Text>
              </TouchableOpacity>
            </View>
        )
    };
    //点击列表点击每一行
    clickItem(item) {
        alert(item.key)
        // const { navigate } = this.props.navigation;
        // navigate('HomeDetail',{
        //   url:item.contenturl
        // });
    }
     //头视图
    headerView() {
        return <TextInput
        style={{marginTop:10,marginLeft:30,marginRight:30,height: 40, borderColor: '#CDCDCD', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder='请输入联系人姓名'/>

    }
    //分割线
    _separatorView = () => {
        return (
            <View style={{marginLeft:30,marginRight:30, backgroundColor: '#CDCDCD', height: 1}}>
            </View>
        )
    };
  render() {
    var data = []
    for (var i = 0; i < 20; i++) {
      data[i] = {key:i,room:'小学2016级6班',name:'张璐',phone:'13140015926'}
    };
    return (
      <View style={styles.container}>

        <FlatList ref={(flatList)=>this._flatList = flatList} style={styles.list}
                          data={data}
                          renderItem={({item}) => this._renderItemView(item)}
                          ListHeaderComponent={this.headerView}
                          ItemSeparatorComponent = {this._separatorView}
                          onViewableItemsChanged={(info)=>{
                          console.log(info);
                    }}/>
      </View>
    );
  }
   componentDidMount(){

     let data = {"UserName":"zhulin","Password":"123456"}

     let formData = new FormData();
     formData.append("values",JSON.stringify(data));
    //formData.append("参数", "值");

    fetch('http://192.168.0.52:8078/Management/GetMyMailList', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            //body:JSON.stringify("key=123")
            body:formData

        }).then((response) => response.json())//1
            .then((jsonData) => {//2
              if (jsonData.Result==0) {
                alert('成功！')
              };
              console.log(jsonData)
            }).catch(error=>{
              alert(error)
            });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  list:{
    flex:1,
    marginTop:10,
  },
  item:{
    width:ScreenWidth,
    height:60,
    backgroundColor:'white'
  },
  roomText:{
    width:ScreenWidth-150,
    height:30,
    marginLeft:30,
    marginTop:10,
    backgroundColor:'#E7E7E7'
  },
  nameText:{
    width:ScreenWidth-150,
    height:30,
    marginLeft:30,
    backgroundColor:'#E7E7E7'
  },
  phoneText:{
    width:ScreenWidth-150,
    height:30,
    marginLeft:30,
    backgroundColor:'#E7E7E7'
  },
});


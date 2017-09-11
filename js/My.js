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
  SectionList,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Alert
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width

export default class My extends Component {
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
    //点击列表点击每一行
    clickItem(item) {
        //alert(item.key)
        if (item.key == 0) {
          const { navigate } = this.props.navigation;
          navigate('PersonInfo');
        }else if(item.key == 1){
          const { navigate } = this.props.navigation;
          navigate('Setting');
        }else if(item.key == 2){
          const { navigate } = this.props.navigation;
          navigate('CheckBind');
        }else if(item.key == 3){
          const { navigate } = this.props.navigation;
          navigate('Help');
        }else{
          Alert.alert('提示','退出登录',
            [
              {text: '确定', onPress: this.exitLogin.bind(this)},
              {text: '取消', onPress: () => console.log('Ask me later pressed')},
            ]
          )
        }
    }
    exitLogin(){
      console.log('退出登录')
      const { navigate } = this.props.navigation;
          navigate('Login');
    }
  render() {
    var data = []
    let nameArr = ['个人信息','设置','审核学生绑定','帮助与反馈','退出登录']
    let iconArr = [require('../resource/my/business.png'),
                   require('../resource/my/finger.png'),
                   require('../resource/my/idea.png'),
                   require('../resource/my/problem.png'),
                   require('../resource/my/exit.png')]
    for (var i = 0; i < 5; i++) {
      data[i] = {name:nameArr[i],icon:iconArr[i],key:i}
    };
    return (
      <View style={styles.container}>
        <FlatList ref={(flatList)=>this._flatList = flatList} style={styles.list}
                          data={data}
                          renderItem={({item}) => this._renderItemView(item)}
                          onViewableItemsChanged={(info)=>{
                          console.log(info);
                    }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list:{
    flex:1,
    marginTop:10,
  },
  contentView:{
    width:ScreenWidth,
    height:60,
    //backgroundColor:'green'
  },
  item:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:10,
    height:40,
    backgroundColor:'#E7E7E7'
  },
  itemIcon:{
    margin:10,
    width:30,
    height:30,
  },
  itemText:{
    marginTop:10,
    width:ScreenWidth-100,
    height:30,
  },

});


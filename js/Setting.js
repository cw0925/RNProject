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
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width

export default class Setting extends Component {
  //item
  _renderItemView = (item) => {
        return (
        <TouchableOpacity  onPress={this.clickItem.bind(this,item)} activeOpacity={1}>
          <View style={styles.contentView}>
              <Image style={styles.itemIcon} source={item.icon}/>
              <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
    };
    //分割线
    _separatorView = () => {
        return (
            <View style={{flex: 1, backgroundColor: '#8E8E8E', height: 1}}>
            </View>
        )
    };
    //点击列表点击每一行
    clickItem(item) {
      if (item.key == 0) {
          const { navigate } = this.props.navigation;
          navigate('ChangePassword');
      }else if(item.key == 1){

      }else if(item.key == 2){
          const { navigate } = this.props.navigation;
          navigate('ChangePhone');
      }else if(item.key == 3){
          const { navigate } = this.props.navigation;
          navigate('Agreement');
      }else{
          const { navigate } = this.props.navigation;
          navigate('About');
      }
    }
  render() {
    var data = []
    let nameArr = ['修改密码','设置自动登录','更换手机号','服务协议','关于健智云']
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
                          ItemSeparatorComponent = {this._separatorView}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list:{
    flex:1,
    marginTop:20,
  },
  contentView:{
    width:ScreenWidth,
    height:50,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#E7E7E7'
  },
  itemIcon:{
    margin:10,
    width:30,
    height:30,
  },
  itemText:{
    marginTop:14,
    width:ScreenWidth-100,
    height:30,
  },
});


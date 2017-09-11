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
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width

var  data = []
export default class Healthy extends Component {
  //item
  _renderItemView = (item) => {
        return (
            <View style={styles.item}>
              <TouchableOpacity key={item.key}  onPress={this.clickItem.bind(this,item)} activeOpacity={1}>
                <Image style = {styles.itemImg} source={item.image}/>
                 <Text style={styles.itemText}>{item.title} </Text>
              </TouchableOpacity>
            </View>
        )
    };
    //点击列表点击每一行
    clickItem(item) {
        const { navigate } = this.props.navigation;
          navigate('ProjectContent');
    }
  render() {
    let titleArr = ['仰卧起坐','身高','男1000米','女800米','肺活量','引体向上',
                    '立定跳远','50米往返跑','体重','50米跑','跳绳','坐位体前屈']
    let imageArr = [require('../resource/healthy/announcement.png'),
                    require('../resource/healthy/birth.png'),
                    require('../resource/healthy/complain.png'),
                    require('../resource/healthy/data.png'),
                    require('../resource/healthy/feedback.png'),
                    require('../resource/healthy/goodquery.png'),
                    require('../resource/healthy/information.png'),
                    require('../resource/healthy/manage.png'),
                    require('../resource/healthy/manager.png'),
                    require('../resource/healthy/organizationquery.png'),
                    require('../resource/healthy/pay.png'),
                    require('../resource/healthy/RT.png')]
    for (var i = 0; i < 12; i++) {
      data[i] = {key:i,title:titleArr[i],image:imageArr[i]}
    };
    return (
      <View style={styles.container}>
        <View  style={styles.textView}>  
            <Text style={styles.text}>2017年度市辖区体检（测试）</Text>  
        </View> 
        <View  style={styles.projectView}>
        <Text style={{marginLeft:20,fontSize:14}}>请选择体质监测项目</Text>
        </View>
        <FlatList ref={(flatList)=>this._flatList = flatList} style={styles.list}
                          data={data}
                          numColumns={4}
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
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textView:{
    flexDirection:'column',  
    justifyContent:'center',  
    alignItems:'center',
    width:ScreenWidth,
    height:50, 
    backgroundColor:'#E7E7E7'
  },
  text:{  
    fontSize:17,  
  } ,
  projectView:{
    flexDirection:'column',  
    justifyContent:'center',  
    alignItems:'flex-start',
    width:ScreenWidth,
    height:30,
    marginTop:10, 
    backgroundColor:'#E7E7E7'
  },
  list:{
    flex:1,
  },
  item:{
    margin:10,
    width:(ScreenWidth-80)/4,
    height:(ScreenWidth-80)/4+30
  },
  itemImg:{
    width:(ScreenWidth-80)/4,
    height:(ScreenWidth-80)/4
  },
  itemText:{
    marginTop:10,
    width:(ScreenWidth-80)/4,
    height:30,
    fontSize: 14,
    textAlign:'center',
  },
});


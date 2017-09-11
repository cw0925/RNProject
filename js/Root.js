/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import React from 'react';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import Login from './Login.js'

import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';

import Check from './Check.js';
import Examine from './Examine.js';
import My from './My.js'
import Healthy from './Healthy.js';
import Unexpected from './Unexpected.js';
import Addressbook from './Addressbook.js'
import PersonInfo from './PersonInfo.js'
import Help from './Help.js'
import CheckBind from './CheckBind.js'
import Setting from './Setting.js'
import ChangePassword from './ChangePassword.js'
import ChangePhone from './ChangePhone.js'
import Agreement from './Agreement.js'
import About from './About.js'
import ProjectContent from './ProjectContent.js'
import Scanner from './Scanner.js'

const DanTangIcon = require('../resource/tabbar/TabBar_home_23x23_.png');
const DanPinIcon = require('../resource/tabbar/TabBar_gift_23x23_.png');
const CategoryIcon = require('../resource/tabbar/TabBar_category_23x23_.png');
const MyIcon = require('../resource/tabbar/TabBar_me_boy_23x23_.png');

// const GankIcon = require('../resources/Gank.png');
// const MainIcon = require('../resources/Main.png');



const MyTab = TabNavigator({
    Check: {
        screen: Check,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分

            // title:'Test1', 同步设置导航和tabbar文字,不推荐使用
            headerTitle:'考勤审核', // 只会设置导航栏文字,
            // header:{}, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            //headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
            // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
            //headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
            headerStyle:{
                backgroundColor:'#3B919F',
                elevation: 0
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
             headerBackTitleStyle:{
                color:'#FF4040'
             }, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭


            // TabNavigator 属性部分

            // title:'', 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? DanTangIcon : DanTangIcon}
                        style={[{height:25,width:25 }, {tintColor: tintColor}]}/>
                )
            }), // 设置标签栏的图标。需要单独设置。
            tabBarLabel:'考勤审核', // 设置标签栏的title。推荐这个方式。
        })
    },
    Examine: {
        screen: Examine,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分

            // title:'Test1', 同步设置导航和tabbar文字,不推荐使用
            headerTitle:'预防查验', // 只会设置导航栏文字,
            // header:{}, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
            // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
            // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
            // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭


            // TabNavigator 属性部分

            // title:'', 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? DanPinIcon : DanPinIcon}
                        style={[{height:25,width:25 }, {tintColor: tintColor}]}
                    />
                )
            }), // 设置标签栏的图标。需要单独设置。
            tabBarLabel:'预防查验', // 设置标签栏的title。推荐这个方式。
        })
    },
    My: {
        screen: My,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分

            // title:'Test1', 同步设置导航和tabbar文字,不推荐使用
            headerTitle:'我的', // 只会设置导航栏文字,
            // header:{}, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
            // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
            // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
            // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭


            // TabNavigator 属性部分

            // title:'', 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? CategoryIcon : CategoryIcon}
                        style={[{height:25,width:25 }, {tintColor: tintColor}]}
                    />
                )
            }), // 设置标签栏的图标。需要单独设置。
            tabBarLabel:'我的', // 设置标签栏的title。推荐这个方式。
        })
    },
    Healthy: {
        screen: Healthy,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分

            // title:'Test1', 同步设置导航和tabbar文字,不推荐使用
            headerTitle:'健康体测', // 只会设置导航栏文字,
            //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
            // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
            // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
            // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭


            // TabNavigator 属性部分

            // title:'', 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? MyIcon : MyIcon}
                        style={[{height:25,width:25 }, {tintColor: tintColor}]}
                    />
                )
            }), // 设置标签栏的图标。需要单独设置。
            tabBarLabel:'健康体测', // 设置标签栏的title。推荐这个方式。
        })
    },
    Unexpected: {
        screen: Unexpected,
        navigationOptions:({navigation,screenProps}) => ({

            // StackNavigator 属性部分

            // title:'Test1', 同步设置导航和tabbar文字,不推荐使用
            headerTitle:'突发上报', // 只会设置导航栏文字,
            //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            // headerBackTitle:null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
            // headerTruncatedBackTitle:'', // 设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。
            // headerRight:{}, // 设置导航条右侧。可以是按钮或者其他。
            // headerLeft:{}, // 设置导航条左侧。可以是按钮或者其他。
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
            // headerBackTitleStyle:{}, // 设置导航条返回文字样式。
            // headerTintColor:'green', // 设置导航栏文字颜色。总感觉和上面重叠了。
            gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭


            // TabNavigator 属性部分

            // title:'', 同上
            tabBarVisible:true, // 是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? MyIcon : MyIcon}
                        style={[{height:25,width:25 }, {tintColor: tintColor}]}
                    />
                )
            }), // 设置标签栏的图标。需要单独设置。
            tabBarLabel:'突发上报', // 设置标签栏的title。推荐这个方式。
        })
    },
     
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
         activeTintColor:'#3B919F', // label和icon的前景色 活跃状态下（选中）。
        // inactiveTintColor:'orange', // label和icon的前景色 不活跃状态下(未选中)。

        //activeBackgroundColor:'#FF4040', //label和icon的背景色 活跃状态下（选中） 。
       // inactiveBackgroundColor:'green', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性

        // activeTintColor:'red', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'red', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }

});
// 初始化StackNavigator
const MyNav = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Login: {
        screen: Login,
        navigationOptions:{
            header:null,
        }
    },
    MyTab:{
        screen:MyTab,
    },
    //通讯录
    Addressbook: {
        screen: Addressbook,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'通讯录',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    }, 
    //个人信息
    PersonInfo: {
        screen: PersonInfo,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'个人信息',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //帮助与反馈
    Help: {
        screen: Help,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'帮助反馈',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //审核学生绑定
    CheckBind: {
        screen: CheckBind,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'审核绑定学生列表',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //设置
    Setting: {
        screen:Setting,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'设置',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //修改密码
    ChangePassword: {
        screen:ChangePassword,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'修改密码',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //修改手机号
    ChangePhone: {
        screen:ChangePhone,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'修改手机号',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //服务协议
    Agreement: {
        screen:Agreement,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'服务协议',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //关于健智云
    About: {
        screen:About,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'关于健智云',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //健康体测项目
    ProjectContent: {
        screen:ProjectContent,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'体测项目',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },
    //扫一扫
    Scanner: {
        screen:Scanner,
        navigationOptions:{
             //header:null, // 可以自定义导航条内容，如果需要隐藏可以设置为null
            headerTitle:'扫一扫',
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:'#3B919F'
            }, // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
            headerTitleStyle:{
                fontSize:17,
                color:'white'
            }, // 设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
        }
    },

},{

});

const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height:35,width:35 }, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:22,color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const tabBarVisible = true;
    // const header = null;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};
export default MyNav;
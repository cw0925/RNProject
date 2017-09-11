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
} from 'react-native';

import { QRScannerView } from 'ac-qrcode';

export default class Scanner extends Component {
  render() {
    
    return (
      < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                renderTopBarView={() => this._renderTitleBar()}
                renderBottomMenuView={() => this._renderMenu()}/>
    );
  }
   _renderTitleBar(){
        return(
            <Text
                style={{opacity:0,color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            ></Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{opacity:0,color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            ></Text>
        )
    }

    barcodeReceived(e) {

        const {navigate,goBack,state} = this.props.navigation;
        // 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
        state.params.callback(e.data);
        goBack();
    }

}

var styles = StyleSheet.create({
    camera: {
        flex: 1,
        marginTop:0,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor:'transparent',


    }
})

var Dimensions = require('Dimensions');
var widthd = Dimensions.get('window').width;
var height  = Dimensions.get('window').height;



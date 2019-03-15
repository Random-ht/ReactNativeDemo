import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StatusBar
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Main from './Main';
import SplashScreen from "react-native-splash-screen";

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default class Splash extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        SplashScreen.hide();//关闭启动屏幕
        // setTimeout(() => {
        //     this.props.navigator.replace({
        //         component: Main
        //     });
        // }, 2000);
        this.props.navigator.replace({
            component: Main
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle="light-content" />
                <Image style={{ width: width, height: height }} source={{ uri: 'welcome' }} ></Image>
            </View>
        )
    }
}
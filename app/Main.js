/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
import React, { Component } from 'react';
import { Image, StyleSheet, View, StatusBar } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';

import SplashScreen from "react-native-splash-screen";

import Home from './home/Home';
import Moves from './message/Moves';
import Mine from './mine/Mine';
import More from './more/More';
import BaseComponent from './base/BaseComponent';

/****
 * 主界面
 */
export default class Main extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();//关闭启动屏幕
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="#1296db"
                    barStyle="light-content" />

                <TabNavigator >
                    {/* 首页 */}
                    {this.getItemsBar("首页", 'normal_home', 'selected_home', 'home', <Home navigator={this.props.navigator} />)}
                    {/* {this.getItemsBar("首页", 'normal_home', 'selected_home', 'home', Home)} */}
                    {/* 消息 */}
                    {this.getItemsBar("电影", 'normal_message', 'selected_message', 'moves', <Moves navigator={this.props.navigator} />)}
                    {/* {this.getItemsBar("电影", 'normal_message', 'selected_message', 'moves', Moves)} */}
                    {/* 我的 */}
                    {this.getItemsBar("我的", 'normal_mine', 'selected_mine', 'mine', <Mine navigator={this.props.navigator} />)}
                    {/* {this.getItemsBar("我的", 'normal_mine', 'selected_mine', 'mine', Mine)} */}
                    {/* 更多 */}
                    {this.getItemsBar("更多", 'normal_more', 'selected_more', 'more', <More navigator={this.props.navigator} />)}
                    {/* {this.getItemsBar("更多", 'normal_more', 'selected_more', 'more', More)} */}
                </TabNavigator>
            </View >
        );
    }

    getItemsBar(title, normalImage, selectedImage, selectedTab, component) {
        return (
            <TabNavigator.Item
                title={title}
                selectedTitleStyle={{ color: "#1296db" }}
                renderIcon={() => <Image source={{ uri: normalImage }} style={styles.imageStyle} />}
                renderSelectedIcon={() => <Image source={{ uri: selectedImage }} style={styles.imageStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selected={this.state.selectedTab === selectedTab}>

                {component}

                {/* <Navigator
                    initialRoute={{ component: component }}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        return (<route.component navigator={navigator} {...route.props} />)
                    }}
                /> */}
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 30,
        height: 30
    },
});

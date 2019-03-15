/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry, Platform } from 'react-native';
import React, { Component } from 'react';
import Main from './app/Main';
import { name as appName } from './app.json';
import Splash from './app/Splash';
import { Navigator } from 'react-native-deprecated-custom-components';

AppRegistry.registerComponent(appName, () => Platform.OS === 'ios' ? Main : Android);
// AppRegistry.registerComponent(appName, () => Main);


class Android extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: '启动页', component: Main }}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.props} navigator={navigator} />
                }}
            />
        )
    }
}

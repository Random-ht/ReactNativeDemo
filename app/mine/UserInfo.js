import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import Camera from 'react-native-camera';

import Title from '../cell/BarCell';
import MoreItemsCell from '../cell/MoreItemsCell';


/***
 * 用户个人信息界面
 */
export default class UserInfo extends Component {
    constructor(props) {
        super(props)
    }

    itemOnClick(title) {
        if (title == '头像') {
            // return (
            // <Camera
            //     ref={cam => {
            //         this.camera = cam;
            //     }}
            //     style={styles.preview}
            //     aspect={Camera.constants.Aspect.fill}
            //     captureAudio={false}
            // ></Camera>
            // )
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Title
                    leftImage='normal_home'
                    title='个人中心'
                    rightImage=''
                    toBack={() => { this.props.navigator.pop() }} />

                <ScrollView>
                    <MoreItemsCell
                        title='头像'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={10}
                        itemOnClick={(title) => { this.itemOnClick(title) }} />
                </ScrollView>
            </View>
        )
    }
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Title from '../cell/BarCell';

export default class Setting extends Component {
    constructor(props) {
        super(props);
    }

    //点击了返回按钮
    toBack() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Title
                    title='设置'
                    leftImage='normal_home'
                    rightImage=''
                    toBack={() => this.toBack()} />
            </View>
        )
    }
}
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default class BarCell extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                {/* 左边 */}
                {this.getLeftView()}
                {/* 中间 */}
                <Text style={styles.textStyle}>{this.props.title}</Text>
                {/* 右边 */}
                {this.getRightView()}
                {/* <TouchableOpacity activeOpacity={0.5} onPress={() => { this.toSetting('设置') }}>
                    <Image style={styles.rightImageStyle} source={{ uri: this.props.rightImage }}></Image>
                </TouchableOpacity> */}
            </View>
        )
    }

    toSetting(content) {
        this.props.toSetting(content);
    }

    //获取Title左边的控件
    getLeftView() {
        return (
            this.props.leftImage.length === 0 ? <View style={styles.leftImageStyle}></View> :
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.toBack()}>
                    <Image style={styles.leftImageStyle} source={{ uri: this.props.leftImage }}></Image>
                </TouchableOpacity>
        )
    }

    toBack(){
        this.props.toBack();
    }

    //获取Title右边的控件
    getRightView() {
        return (
            this.props.rightImage.length === 0 ? <View style={styles.rightImageStyle}></View> :
                <TouchableOpacity activeOpacity={0.5} onPress={() => { this.toSetting('设置') }}>
                    <Image style={styles.rightImageStyle} source={{ uri: this.props.rightImage }}></Image>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1296db',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftImageStyle: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    textStyle: {
        fontSize: 16,
        color: 'white'
    },
    rightImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightImageStyle: {
        width: 30,
        height: 30,
        marginRight: 10
    },
})

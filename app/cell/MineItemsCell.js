import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class MineItemsCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={[styles.container, { marginTop: this.props.marginTop }]}>
                    {/* 左边 */}
                    <View style={styles.leftContainer}>
                        <Image style={styles.leftImage} source={{ uri: this.props.leftImage }}></Image>
                        <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                    </View>
                    {/* 右边 */}
                    {this.getRightView()}
                </View>
            </TouchableOpacity>
        )
    }

    getRightView() {
        //标题为空的时候  就只有两种情况   要么只有右箭头  要么有图片加右箭头
        if (this.props.rightTitle.length === 0) {
            if (this.props.rightImage.length === 0) {//右图片为空时  就只剩下右箭头
                return <Image style={styles.toRightImage} source={{ uri: this.props.toRightImage }}></Image>
            } else {
                return (
                    <View style={styles.rightContainer}>
                        <Image style={styles.rightImage} source={{ uri: this.props.rightImage }}></Image>
                        <Image style={styles.toRightImage} source={{ uri: this.props.toRightImage }}></Image>
                    </View>
                )

            }
        } else {//标题不为空时   就只有一种情况   标题加右箭头
            return (
                <View style={styles.rightContainer}>
                    <Text style={styles.rightTitle}>{this.props.rightTitle}</Text>
                    <Image style={styles.toRightImage} source={{ uri: this.props.toRightImage }}></Image>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: 'white',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftImage: {
        width: 20,
        height: 20
    },
    leftTitle: {
        color: 'black',
        marginLeft: 10
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightTitle: {
        color: 'black'
    },
    rightImage: {
        width: 20,
        height: 20
    },
    toRightImage: {
        width: 20,
        height: 20,
        marginLeft: 10
    }
})
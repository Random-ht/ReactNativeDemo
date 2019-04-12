import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';

//更多里面的items  抽取出来的界面
export default class MoreItemsCell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSwitch: false
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this._onPress(this.props.title)}>
                <View style={[styles.container, { marginTop: this.props.marginTop }]}>
                    {/* 左边 */}
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    {/* 右边 */}
                    {this.getRightView()}
                </View>
            </TouchableOpacity>
        )
    }

    _onPress(title) {
        alert(title);
        if(title=='头像'){
            this.props.itemOnClick(title);
        }
    }

    getRightView() {
        if (this.props.rightTitle.length === 0) {
            if (this.props.rightImage.length === 0) {
                return (
                    <Switch value={this.state.isSwitch} onValueChange={(value) => this.setState({ isSwitch: value })}></Switch>
                )
            } else {
                return (
                    <Image source={{ uri: this.props.rightImage }}style={styles.rightImageStyle}></Image>
                )
            }
        } else {
            return (
                <View style={styles.rightContainer}>
                    <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>
                    <Image source={{ uri: this.props.rightImage }} style={styles.rightImageStyle}></Image>
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
        height: 40,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10
    },
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightImageStyle: {
        width: 25,
        height: 25
    },
    rightTitleStyle: {
        color: 'gray',
        fontSize: 14,
    }
})
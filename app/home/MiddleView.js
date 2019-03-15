import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MiddleView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.OnClick("点击")}>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text>天天特价</Text>
                        <Text>特惠不打烊</Text>
                    </View>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: 'selected_home' }} />
                </View>
            </TouchableOpacity>
        )
    }

    OnClick(content) {
        this.props.OnClick(content);
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        borderLeftColor: '#e8e8e8',
        borderLeftWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10
    },
})
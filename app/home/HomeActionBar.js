import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class HomeActionBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => { this.props.onAddress() }} style={{ color: 'white' }}>广东</Text>
                <TextInput style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, margin: 0, paddingLeft: 10, paddingBottom: 0, paddingRight: 0, paddingTop: 0 }}
                    placeholder='输入商家、品类、商圈'></TextInput>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: 'normal_home' }} style={{ width: 20, height: 20 }}></Image>
                    <Image source={{ uri: 'normal_home' }} style={{ width: 20, height: 20 }}></Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        backgroundColor: '#1296db'
    }
})
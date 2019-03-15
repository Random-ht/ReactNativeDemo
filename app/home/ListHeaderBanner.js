import React, { Component } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');


export default class ListHeaderBanner extends Component {
    constructor(props) {
        super(props);
    }

    renderItem(item) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.itemOnClick(item) }}>
                <View style={{ alignItems: 'center', width: width / 5 }}>
                    <Image source={{ uri: item.icon }} style={{ width: 50, height: 50 }}></Image>
                    <Text>{item.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    itemOnClick(item) {
        this.props.OnItemClick(item);
    }

    render() {
        return (
            <View style={{ width: width }} >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}//唯一标识
                    data={this.props.dataList}//数据
                    renderItem={({ item }) => this.renderItem(item)} // row
                    numColumns={5} />
            </View>
        )
    }
}

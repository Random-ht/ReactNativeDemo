import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import MineItemsCell from '../cell/MineItemsCell';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

export default class ListBottomView extends Component {
    constructor(props) {
        super(props)
    }

    //条目的样式布局
    renderItem(item) {
        // console.log(item);
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.OnBottomListViewItemClick(item) }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={{ uri: item.icon }} style={{ width: width / 3, height: 50 }}></Image>
                    <Text>{item.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    OnBottomListViewItemClick(item) {
        this.props.OnBottomListViewItemClick(item)
    }

    render() {
        return (
            <View>
                {/* 上面横着的内容 */}
                <MineItemsCell
                    leftImage='selected_home'
                    leftTitle='购物中心'
                    rightTitle='显示全部'
                    rightImage=''
                    toRightImage="to_right"
                    marginTop={10} />

                {/* 下面的列表内容 */}
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}//唯一标识
                    data={this.props.dataList}//数据
                    renderItem={({ item }) => this.renderItem(item)} // row
                    numColumns={3} />
            </View>
        )
    }
}
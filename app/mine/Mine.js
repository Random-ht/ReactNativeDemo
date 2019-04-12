import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import MineItemsCell from '../cell/MineItemsCell';
import UserInfo from './UserInfo';


var MiddleView = require('../assets/MiddleView.json');
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');

export default class Mine extends Component {

    constructor(props){
        super(props);
    }

    //点击蓝色背景进入用户个人信息界面
    toUserInfo(){
        this.props.navigator.push({
            component:UserInfo
        })
    }

    //leftTitle 左边的文字  leftImage左边的图片 
    getItems(leftTitle, leftImage, rightTitle, rightImage, toRightImage, marginTop) {
        return (
            <MineItemsCell
                leftTitle={leftTitle}
                leftImage={leftImage}
                rightTitle={rightTitle}
                rightImage={rightImage}
                toRightImage={toRightImage}
                marginTop={marginTop} />
        )
    }

    //获取评价收藏等。。。
    getRowItems() {
        var arr = [{ 'content': '100', 'desc': '涛哥哥' }, { 'content': '12', 'desc': '评价' }, { 'content': '50', 'desc': '收藏' }];
        var views = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            views.push(
                <TouchableOpacity key={i} activeOpacity={0.5}>
                    <View style={styles.topRowContainer}>
                        <Text style={{ color: 'white' }}>{item.content}</Text>
                        <Text style={{ color: 'white' }}>{item.desc}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return views;
    }

    //蓝色背景的所有内容
    getTopView() {
        return (
            <View style={styles.topView}>
                {/* 上 */}
                <TouchableOpacity activeOpacity={0.5} onPress={() => {this.toUserInfo() }}>
                    <View style={styles.topViewHeadContainer}>
                        <Image style={styles.topImage} source={{ uri: 'logo' }}></Image>
                        <Text style={{ color: 'white' }}>涛哥哥哥</Text>
                        <Image source={{ uri: 'vip' }} style={{ width: 20, height: 20, marginLeft: 10 }}></Image>
                        <Image source={{ uri: 'to_right_white' }} style={styles.topToRight}></Image>
                    </View>
                </TouchableOpacity>
                {/* 下 */}
                <View style={styles.topBottomContainer}>
                    {this.getRowItems()}
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                {/* 蓝色背景的所有内容 */}
                {this.getTopView()}

                {this.getItems('我的订单', 'mine_dingdan', '查看全部订单', '', 'to_right', 10)}
                {/* 待付款 待使用 待评价  退款/售后 */}
                <View style={styles.middleViewContainer}>
                    {this.getMiddleView()}
                </View>
                {this.getItems('涛哥钱包', 'mine_qianbao', '账户余额几个亿', '', 'to_right', 10)}
                {this.getItems('抵用券', 'mine_diyongquan', '0', '', 'to_right', 0)}
                {this.getItems('积分商城', 'mine_jifen', '', '', 'to_right', 10)}
                {this.getItems('今日推荐', 'mine_tuijian', '', 'hot_new', 'to_right', 10)}
                {this.getItems('我要合作', 'mine_hezuo', '轻松开店，招财进宝', '', 'to_right', 10)}
            </ScrollView>
        )
    }

    //获取  待付款 待使用 待评价  退款/售后
    getMiddleView() {
        var arr = [];
        for (var i = 0; i < MiddleView.length; i++) {
            var items = MiddleView[i];
            arr.push(
                <TouchableOpacity key={i} activeOpacity={0.5} onPress={() => alert(i)}>
                    <View style={styles.middleView}>
                        <Image source={{ uri: items.icon }} style={styles.image}></Image>
                        <Text >{items.content}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    topView: {
        backgroundColor: '#1296db',
        height: 150
    },
    topViewHeadContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    },
    topToRight: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10
    },
    topBottomContainer: {
        flexDirection: 'row',
        height: 50,
        width: width + 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    topRowContainer: {
        width: width / 3,
        borderRightWidth: 0.5,
        borderRightColor: 'white',
        alignItems: 'center'
    },
    topImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 10
    },
    middleViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },
    middleView: {
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20
    }
})
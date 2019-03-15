import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import Test from '../Test';
import HomeActionBar from './HomeActionBar';
import ListHeaderBanner from './ListHeaderBanner';
import MiddleView from './MiddleView';
import ListBottomView from './ListBottomView';
import GoodsDetail from './GoodsDetail';

var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

var MainHeaderData = require('../assets/MainHeaderBanner.json');

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* actionBar */}
                <HomeActionBar onAddress={() => { this.toAddress() }} />
                {/* 除了actionBar一下的内容 */}
                <View style={{ flex: 1, backgroundColor: '#e8e8e8' }}>
                    <ScrollView >
                        {/* 设置banner */}
                        {this.getBanner()}
                        {/* 设置banner下面的一排数据 */}
                        <View style={{ marginTop: 15, backgroundColor: 'white', flexDirection: 'row', width: width, height: 100 }}>
                            {/* 左边 */}
                            {this.getMiddleLeftView()}
                            {/* 右边 */}
                            {this.getMiddleRightView()}
                        </View>

                        <View style={{ marginTop: 15, backgroundColor: 'white' }}>
                            <MiddleView OnClick={(content) => this.OnClick(content)} />
                            <View style={{ flexDirection: 'row', width: width + 1 }}>
                                {this.getMiddleRightView()}
                                {this.getMiddleRightView()}
                            </View>
                        </View>

                        <ListBottomView
                            OnBottomListViewItemClick={(item) => { this.OnBottomListViewItemClick(item) }}
                            dataList={MainHeaderData[0]} />
                    </ScrollView>
                </View>
            </View>
        )
    }

    //每一条的点击事件
    OnClick(content) {
        alert(content);
    }

    //最下面的列表的item的点击事件
    OnBottomListViewItemClick(item) {
        //进入webView界面
        // alert(item.desc)

        this.props.navigator.push({
            component: GoodsDetail,
            props: {
                webUrl: 'http://www.baidu.com'
            }
        })
    }

    //获取中间控件左边的内容
    getMiddleLeftView() {
        return (
            <View style={{ flex: 0.5, backgroundColor: 'white', alignItems: 'center' }}>
                <View>
                    <Image source={{ uri: 'selected_home' }} style={{ width: 30, height: 30 }} />
                    <Image source={{ uri: 'selected_home' }} style={{ width: 30, height: 30 }} />
                    <Text>探路组碳烤鱼</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>￥9.5</Text>
                        <Text>再减3</Text>
                    </View>
                </View>
            </View>
        )
    }

    //获取中间控件右边的内容
    getMiddleRightView() {
        return (
            <View style={styles.middleRightView}>
                <MiddleView OnClick={(content) => this.OnClick(content)} />
                <MiddleView OnClick={(content) => this.OnClick(content)} />
            </View>
        )
    }

    //设置banner
    getBanner() {
        return (
            // 获取滚动的banner 
            <View style={{ backgroundColor: 'white' }} >
                <ScrollView
                    onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                    style={{ backgroundColor: 'gary', width: width }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
                    {this.getHeaderBanner()}
                </ScrollView>
                <View style={styles.bannerContainer}>
                    {this.getIndicator()}
                </View>
            </View>
        )
    }

    //当ScrollView滚动完成之后调用的
    onAnimationEnd(e) {
        var scrollX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(scrollX / width);
        this.setState({
            currentPage: currentPage
        })
    }

    //设置banner下面的指示器
    getIndicator() {
        var arr = [];
        var style;
        for (var i = 0; i < MainHeaderData.length; i++) {
            style = i == this.state.currentPage ? { color: 'blue' } : { color: 'gray' }
            arr.push(
                <Text key={i} style={[{ fontSize: 20 }, style]}>&bull;</Text>
            )
        }
        return arr;
    }

    //设置滚动的Banner
    getHeaderBanner() {
        var arr = [];
        // console.log(MainHeaderData.length);
        for (var i = 0; i < MainHeaderData.length; i++) {
            arr.push(
                <ListHeaderBanner
                    key={i}
                    OnItemClick={(item) => { this.OnItemClick(item) }}
                    dataList={MainHeaderData[i]} />
            )
        }
        return arr;
    }

    //banner的 item的点击事件
    OnItemClick(item) {
        alert(item.desc);
    }

    //选择地址  跳转界面
    toAddress() {
        this.props.navigator.push({
            component: Test,
            props: {
                'title': '地址'
            }
        })
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleRightView: {
        flex: 0.5,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
})

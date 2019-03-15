import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Title from '../cell/BarCell';
import MoreItemsCell from '../cell/MoreItemsCell';
import Setting from './Setting';

export default class More extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Title
                    title='更多'
                    leftImage=''
                    rightImage='setting'
                    toSetting={(content) => this.toSetting(content)} />

                <ScrollView style={styles.container}>
                    <MoreItemsCell
                        title='扫一扫'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={10} />

                    <MoreItemsCell
                        title='省流量模式'
                        rightImage=''
                        rightTitle=''
                        marginTop={10} />

                    <MoreItemsCell
                        title='消息提醒'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='邀请好友使用涛哥自创app'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='清空缓存'
                        rightImage='to_right'
                        rightTitle='1.95M'
                        marginTop={0} />

                    <MoreItemsCell
                        title='意见反馈'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={10} />

                    <MoreItemsCell
                        title='问卷调查'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='支付帮助'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='网络诊断'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='关于涛哥'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='我要上位'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />

                    <MoreItemsCell
                        title='精品应用'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={10} />

                    <MoreItemsCell
                        title='个人推荐'
                        rightImage='to_right'
                        rightTitle=''
                        marginTop={0} />
                </ScrollView>
            </View>
        )
    }

    toSetting(content) {
        this.props.navigator.push({
            component: Setting,
            props: { 'content': content }
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
});
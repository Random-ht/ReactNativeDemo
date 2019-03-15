import React, { Component } from 'react';
import {
    BackHandler,
    Platform,
    ToastAndroid
} from 'react-native';


/****
 * 主界面继承就可以了   用于处理Android  物理返回键
 */
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    //组件装载得时候
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener("back", this.onBackClicked);
        }
    }

    //当组件销毁时
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener("back", this.onBackClicked);
        }
    }

    //点击得物理返回键
    onBackClicked = () => {
        const { navigator } = this.props;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;//true 表示返回上一页
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {//按第二次的时候，记录的时间+2000 >= 当前时间就可以退出
                //最近2秒内按过back键，可以退出应用。
                BackHandler.exitApp();//退出整个应用
                return false
            }
            this.lastBackPressed = Date.now();//按第一次的时候，记录时间
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);//显示提示信息
            return true;
        }
    }
}
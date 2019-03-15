import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import BarCell from '../cell/BarCell';

export default class GoodsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        this.setState({
            url: this.props.webUrl
        })
    }

    render() {
        console.log(this.props.webUrl)
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <BarCell
                    leftImage='normal_home'
                    title='详情'
                    rightImage=''
                    toBack={() => this.props.navigator.pop()} />

                <WebView
                    startInLoadingState={true}
                    automaticallyAdjustContentInsets={true}
                    style={{ flex: 1, backgroundColor: 'white' }}
                    source={{ uri: this.state.url }} />
            </View>
        )
    }
}
import React, { Component } from "react";
import { AppState, View, Text, Image } from 'react-native';
import BaseComponent from "./base/BaseComponent";


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text onPress={() => { this.props.navigator.pop() }}>{this.props.title == null ? '跳转进来的界面' : this.props.title}</Text>
            </View>
        )
    }
}
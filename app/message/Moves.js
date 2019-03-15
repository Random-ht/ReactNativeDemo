import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import BarCell from '../cell/BarCell';


var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class Moves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true
                });
            });
    }

    renderItem(item) {
        // console.log(item);
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.OnItemClick(item) }}>
                <View style={styles.itemContainer}>
                    <Image style={styles.imageStyle} source={{ uri: item.posters.profile }}></Image>
                    <View style={styles.itemTextContainer}>
                        <Text style={{ color: 'black' }}>{item.title}</Text>
                        <Text style={{ color: 'black' }}>{item.year}</Text>
                    </View>
                </ View>
            </TouchableOpacity>
        )
    }

    OnItemClick(item) {
        alert(item.title);
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F5FCFF"
                }}>
                    <Text>Loading movies...</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <BarCell
                    leftImage=''
                    title='电影'
                    rightImage='' />

                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => String(index)}//唯一标识
                    renderItem={({ item }) => this.renderItem(item)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        padding: 6
    },
    imageStyle: {
        width: 60,
        height: 100
    },
    itemTextContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
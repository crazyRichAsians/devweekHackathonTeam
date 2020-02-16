import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button, useWindowDimensions, Dimensions } from 'react-native';
import { Component } from "react";
    //Name

    //5 images

    //Description
export default class InsuranceCard extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={{backgroundColor: 'blue', flex: 0.3}} />
                <View style={{backgroundColor: 'red', flex:0.3}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: "#0000",
        borderRadius: 50,
        justifyContent: 'center'
    },
    item: {
        flex: 0.3,
    }
})
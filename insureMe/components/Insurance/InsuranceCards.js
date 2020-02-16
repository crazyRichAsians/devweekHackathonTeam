import * as React from 'react';
import { Platform, StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import { Component } from "react";


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

function Item({title}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default class InsuranceCard extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}>
                </FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderColor: "#0000",
        borderRadius: 50,
        justifyContent: 'center'
    },
    item: {
        flex: 0.3,
    },
    listItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})
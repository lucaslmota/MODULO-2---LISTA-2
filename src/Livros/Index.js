import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Autores extends Component {
    render() {
        return (
            <View style={styles.altura}>
                <View style={styles.item}>
                    <Text>Marca :{this.props.data.brand}</Text>
                    <Text>Cirado: {this.props.data.created_at}</Text>
                    <Text>Hp: {this.props.data.hp}</Text>
                    <Text>Modelo: {this.props.data.model}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'lightgrey',
        margin: 4,
    },
    altura: {
        marginTop: 50,
    }
})

export default Autores;

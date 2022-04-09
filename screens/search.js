import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
export default class SearchScreen extends Component{
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Text style = {styles.text}>
                    SearchScreen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"grey"
    },
    text: {
        color: "black",
        fontSize: 30
    }
})
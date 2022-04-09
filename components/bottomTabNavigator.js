import React, {Component} from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import TransactionScreen from "../screens/transaction";
import SearchScreen from "../screens/search";
import TextAncestor from "react-native/Libraries/Text/TextAncestor";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen
                name = "Transaction" component = {TransactionScreen}>
                </Tab.Screen>
                <Tab.Screen
                name = "Search" component = {SearchScreen}>
                 </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

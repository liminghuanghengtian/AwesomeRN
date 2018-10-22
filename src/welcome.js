import {createStackNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import ButtonScreen from "./ButtonScreen";
import React, {Component} from "react";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: ButtonScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },

    }
);
export default class App extends Component {
    render() {
        return <RootStack/>;
    }
}
import {createStackNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import ButtonScreen from "./ButtonScreen";
import ListScreen from "./ListScreen";
import SectionListScreen from './SectionListScreen';
import React, {Component} from "react";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

// const RootStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Details: ButtonScreen,
//         FlatList: ListScreen,
//         SectionList: SectionListScreen,
//     },
//     {
//         initialRouteName: 'Home',
//         /* The header config from HomeScreen is now here */
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//
//     }
// );
const RootStack = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                tabBarLabel: '主页',
                tabBarColor: '#53dc2f',
                tabBarIcon: ({tintColor}) => (<Icon name='home' color={tintColor} size={24}/>),
            }
        },
        Details: {
            screen: ButtonScreen,
            navigationOptions: {
                title: 'Details',
                tabBarLabel: '按钮展示',
                tabBarColor: '#2f1c8f',
                tabBarIcon: ({tintColor}) => (<Icon name='settings' color={tintColor} size={24}/>),
            }
        },
        FlatList: {
            screen: ListScreen,
            navigationOptions: {
                title: 'FlatList',
                tabBarLabel: '长数据列表',
                tabBarColor: '#8d1c5d',
                tabBarIcon: ({tintColor}) => (<Icon name='microphone' color={tintColor} size={24}/>),
            }
        },
        SectionList: {
            screen: SectionListScreen,
            navigationOptions: {
                title: 'SectionList',
                tabBarLabel: '分组数据列表',
                tabBarColor: '#f1b13f',
                tabBarIcon: ({tintColor}) => (<Icon name='list' color={tintColor} size={24}/>),
            }
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        labeled: true,
        shifting: true,
        barStyle: {
            backgroundColor: '#194fad',
            paddingBottom: 5
        },
    }
);
export default class App extends Component {
    render() {
        return <RootStack/>;
    }
}
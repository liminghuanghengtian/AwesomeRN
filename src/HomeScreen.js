/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Alert, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        margin: 10,
        color: "#841584",
    },
});

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello {this.props.username}!</Text>
            </View>
        );
    }
}

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {showText: true};
        this.componentWillUnmount = this.componentWillUnmount.bind(this);

        // 每1000毫秒对showText状态做一次取反操作
        this.timer = setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", "1");
        clearInterval(this.timer);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

type Props = {}

class HomeScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    static navigationOptions = {
        title: 'Welcome',
        // tabBarIcon: {focused: true, horizontal: true, tintColor: '#345db3'},
        // tabBarColor: '#563f12',
        // tabBarLabel: '主页',
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
    };

    render() {
        // let只在块级作用域内有效，且
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        // 声明一个常量。复合类型的变量，变量名不指向数据，而是指向数据所在的地址
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>

                <Button
                    style={styles.button}
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Details', {title: "Jane's 详情"})
                    }
                />

                <Button
                    style={styles.button}
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            params: {},
                            actions: [
                                NavigationActions.navigate({routeName: 'Details'})
                            ],
                        }))
                    }}
                />

                <Image source={pic} style={{width: 193, height: 110}}/>
                <Greeting username='Huangxiaoming'/>
                <Blink text='Look at me look at me look at me'/>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    style={styles.button}
                    onPress={this._onPressButton}
                    title="Press Me"
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

export default HomeScreen;

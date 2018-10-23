import React, {Component} from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    Button
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});

class Touchables extends Component {

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this._onPressButton = this._onPressButton.bind(this);
        this._updateTitle = this._updateTitle.bind(this);
    }

    _onPressButton() {
        this.setState({count: this.state.count + 1});
        this.props.navigation.setParams({title: "".concat(this.state.count)});
        // this.props.navigation.setParams({title: this._updateTitle});
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    // static navigationOptions = ({navigation, navigationOptions}) => {
    //     const {params} = navigation.state;
    //
    //     return {
    //         title: params ? params.title : 'A Nested Details Screen',
    //         /* These values are used instead of the shared configuration! */
    //         headerStyle: {
    //             backgroundColor: navigationOptions.headerTintColor,
    //         },
    //         headerTintColor: navigationOptions.headerStyle.backgroundColor,
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },
    //     };
    // };
    static navigationOptions = {
        title: 'Button',
    };

    componentDidMount() {
        this.props.navigation.setParams({title: "标题componentDidMount"});
    }

    state = {
        count: 0,
    };

    _updateTitle = () => {
        this.setState({count: this.state.count + 1});
    };

    componentWillUnmount() {

    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go back"
                    onPress={() => {
                        goBack()
                    }}
                />
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton}
                    underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Touchables;
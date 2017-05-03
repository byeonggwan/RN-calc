/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class likearts extends Component {
  componentWillMount(){
    this.setState({
      equation: "",
    })
  }

  buttonPressed(i){
    this.setState({
      equation: this.state.equation + i,
    })
  }

  listNum(number){
    const listNum = number.map((num) =>
        <View style = {styles.buttoncase}>
          <Button
            onPress = {() => this.buttonPressed(num)} //()=>의 의미, 왜필요한지 모름
            key = {num}
            title = {num}
          />
        </View>
    );
    return(
        listNum
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.top}>
          <Text> {this.state.equation} </Text>
        </View>
        <View style = {styles.bot}>
          <View style={styles.button3}>
            {this.listNum(["1","2","3"])}
          </View>
          <View style={styles.button3}>
            {this.listNum(["4","5","6"])}
          </View>
          <View style={styles.button3}>
            {this.listNum(["7","8","9"])}
          </View>
          <View style={styles.button3}>
            {this.listNum(["+","-","="])}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF'
  },

  button3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  buttoncase: {
    flex: 1,
    alignItems: 'center'
  },

  top: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  bot: {
    flex: 1
  }
});

AppRegistry.registerComponent('likearts', () => likearts);

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
  Button,
  TouchableHighlight
} from 'react-native';

export default class likearts extends Component {
  componentWillMount(){
    this.setState({
      equation: "",
    })
  }

  buttonPressed(i){
    if(i == "="){
      this.setState({
        equation: eval(this.state.equation).toString()
      })
    }
    else if(i == "DEL"){
      this.setState({
        equation: this.state.equation.substr(0,this.state.equation.length-1)
      })
    }
    else if(i == "RE"){
      this.setState({
        equation: ""
      })
    }
    else if(i == "?"){
      alert("Made by Byeonggwan")
    }
    else {
      this.setState({
        equation: this.state.equation + i,
      })
    }
  }


  listNum(number){
    const listNum = number.map((num) =>
        <View style = {styles.buttonContainer}>
          <TouchableHighlight
            onPress = {() => this.buttonPressed(num)} //()=>의 의미, 왜필요한지 모름
            key = {num}
            title = {num}
            style = {styles.button}
          >
            <Text style = {styles.showText}> {num} </Text>
          </TouchableHighlight>
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
          <View style = {styles.alignCenter}>
            <Text> Simple Calculator </Text>
          </View>
          <View style = {styles.alignCenter}>
            <View style = {{flex:1}}></View>
            <View style = {styles.textLine}>
              <Text style = {styles.showText}> {this.state.equation} </Text>
            </View>
            <View style = {{flex:1}}></View>
          </View>
          <View style = {styles.alignCenter}>
            <Text> ☆시공좋아★ </Text>
          </View>
        </View>
        <View style = {styles.bot}>
          <View style={styles.buttons}>
            {this.listNum(["?","/","RE","DEL"])}
          </View>
          <View style={styles.buttons}>
            {this.listNum(["7","8","9","*"])}
          </View>
          <View style={styles.buttons}>
            {this.listNum(["4","5","6","+"])}
          </View>
          <View style={styles.buttons}>
            {this.listNum(["1","2","3","-"])}
          </View>
          <View style={styles.buttons}>
            {this.listNum([".","0","00","="])}
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

  buttons: {
    flex: 1,
    flexDirection: 'row',
  },

  buttonContainer:{
    flex: 1,
    borderWidth: 1,
    borderColor: '#808080'
  },

  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  showText:{
    fontSize: 30,
    color: '#000000'
  },

  textLine: {
    flex: 4,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#808080'
  },

  top: {
    flex: 1,
    flexDirection: 'column'
  },

  bot: {
    flex: 1
  }
});

AppRegistry.registerComponent('likearts', () => likearts);

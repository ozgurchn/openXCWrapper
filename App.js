import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import io from 'socket.io-client/dist/socket.io'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Test',
    };
    this.socket = io('http://192.168.127.185:5858/', {transports: ['websocket'], jsonp: false});
    this.socket.on('add_data', (data) => {
      const value = data.value;
      this.setState({name: value});
    } );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.name}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

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
});

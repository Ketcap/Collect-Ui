import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

// http://collectui.com/designers/kedavra/sign-up

export default class App extends Component {
  state = {
    email: 'filip@riotters.com',
    password: '123456789'
  }
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Create Account</Text>
        <View style={styles.inputs}>
          <View style={styles.inputGroup}>
            <Text
              style={styles.inputHeader}>
              EMAIL</Text>
            <TextInput
              style={styles.input}
              onChangeText={(email) => this.setState({ email })}
              value={email}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text
              style={styles.inputHeader}>
              PASSWORD</Text>
            <TextInput
              style={styles.input}
              onChangeText={(password) => this.setState({ password })}
              value={password}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.95}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
          <Text style={styles.signin}>
            or sign in with <Text style={{ fontWeight: 'bold' }}>facebook</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2C5A',
  },
  header: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 80
  },
  inputs: {
    width: width * .80,
  },
  inputGroup: {
    marginVertical: 10
  },
  inputHeader: {
    color: '#7173ae',
    fontWeight: 'bold',
    paddingBottom: 10
  },
  input: {
    backgroundColor: '#24244f',
    height: 40,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 7.5,
    fontSize: 12
  },
  button: {
    marginTop: 20,
    marginHorizontal: width * .15,
    height: 55,
    borderRadius: width * .25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f3163',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 2
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  signin: {
    marginTop: 20,
    color: '#56598f',
    fontSize: 12,
    textAlign: 'center'
  }
});

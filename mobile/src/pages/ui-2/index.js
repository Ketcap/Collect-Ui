import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Picker from 'react-native-picker-select';

// http://collectui.com/designers/andmironov/checkout

export default class App extends Component {
  state = {
    creditCard: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    zipCode: '',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => ({ value: `${e}`, label: `${e}` })),
    years: [1, 2, 3, 4, 5, 6].map(e => ({ value: `${e + 2017}`, label: `${e + 2017}` }))
  }
  render() {
    const { months, years, expiryMonth, expiryYear } = this.state;
    const price = '$34.3'
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.total}>
          <Text style={styles.amount}>{price}</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Checkout</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.subTitle}>Card Number</Text>
          <TextInput style={styles.input} maxLength={16} />
        </View>
        <View style={[styles.inputGroup, styles.pickerGroup]}>
          <Text style={styles.subTitle}>Expiry date</Text>
          <View style={styles.twoColumn}>
            <Picker
              placeholder={{ label: 'Month', value: null }}
              items={months}
              onValueChange={(expiryMonth) => this.setState({ expiryMonth })}
              value={expiryMonth}
              style={{
                viewContainer: {
                  width: '50%',
                  borderWidth: 1,
                  borderColor: '#cfdbdf',
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                  borderRightWidth: 0,
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  marginVertical: 5
                }
              }}
              hideIcon
            />
            <Picker
              placeholder={{ label: 'Year', value: null }}
              items={years}
              onValueChange={(expiryYear) => this.setState({ expiryYear })}
              value={expiryYear}
              style={{
                viewContainer: {
                  width: '50%',
                  borderWidth: 1,
                  borderColor: '#cfdbdf',
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  marginVertical: 5
                }
              }}
              hideIcon
            />
          </View>
        </View>
        <View style={[styles.twoColumn, styles.inputGroup]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subTitle}>CVC</Text>
            <TextInput style={styles.columnInput} maxLength={3} keyboardType={'numeric'} secureTextEntry />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.subTitle}>ZIP code</Text>
            <TextInput style={styles.columnInput} maxLength={6} keyboardType={'numeric'} />
          </View>
        </View>
        <Text style={styles.infoText}>
          If you don't cancel your subscription before the trial
          ends on November 13, 2015, you agree that you will automatically
          be charged
        </Text>
        <TouchableOpacity style={styles.bottomButton} activeOpacity={.95}>
          <Text style={styles.buttontext}>Pay {price}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  total: {
    width: 90,
    height: 90,
    marginTop: -40,
    borderRadius: 80,
    marginLeft: (width / 2) - 40,
    backgroundColor: '#21d59e',
    shadowColor: '#21d59e',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  amount: {
    color: '#fff',
    fontWeight: 'bold'
  },
  titleView: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  title: {
    color: '#9ca6aa',
    fontWeight: 'bold',
    fontSize: 20
  },
  inputGroup: {
    display: 'flex',
    width,
    paddingHorizontal: width * .1,
    marginVertical: 10
  },
  subTitle: {
    width,
    color: '#9ca6aa',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#cfdbdf',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#91999c'
  },
  pickerGroup: {
    width,
    alignItems: 'flex-start'
  },
  twoColumn: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: 60
  },
  columnInput: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#cfdbdf',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    color: '#91999c'
  },
  infoText: {
    paddingHorizontal: width * .1,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 20,
    fontSize: 12,
    color: '#91999c',
    fontWeight: 'bold'
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 55,
    backgroundColor: '#21d59e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontext: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
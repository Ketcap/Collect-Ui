import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated
} from 'react-native';

// http://collectui.com/designers/drajmund/calculator

const calc = [{
  type: 'text',
  text: 'C',
  style: 'darkInner',
  operand: 'clear'
}, {
  type: 'icon',
  text: '+/-',
  style: 'darkInner',
  operand: 'changeMinus'
}, {
  type: 'text',
  text: '%',
  style: 'darkInner',
  operand: '%'
}, {
  type: 'text',
  text: 'DEL',
  style: 'darkInner',
  operand: 'delete'
}, {
  type: 'text',
  text: '7'
}, {
  type: 'text',
  text: '8'
}, {
  type: 'text',
  text: '9'
}, {
  type: 'text',
  text: '/',
  style: 'darkInner',
  operand: '/'
}, {
  type: 'text',
  text: '4'
}, {
  type: 'text',
  text: '5'
}, {
  type: 'text',
  text: '6'
}, {
  type: 'text',
  text: 'X',
  style: 'darkInner',
  operand: '*'
}, {
  type: 'text',
  text: '1'
}, {
  type: 'text',
  text: '2'
}, {
  type: 'text',
  text: '3'
}, {
  type: 'text',
  text: '-',
  style: 'darkInner',
  operand: '-'
}, {
  type: 'text',
  text: '0'
}, {
  type: 'text',
  text: '.'
}, {
  type: 'text',
  text: '=',
  style: 'equal',
  operand: '='
}, {
  type: 'text',
  text: '+',
  style: 'darkInner',
  operand: '+'
}]
export default class extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    operand: '',
    animate: new Animated.Value(0)
  }
  changeState = (name, val) => () => this.setState({ [name]: val });
  calculation = (e) => () => {
    if (!e.operand) {
      const { operand } = this.state;
      return !operand ?
        this.setState(({ firstInput, ...rest }) => ({
          firstInput: !!firstInput ? `${firstInput}${e.text}` : `${e.text}`,
          ...rest
        }))
        :
        this.setState(({ secondInput, ...rest }) => ({
          secondInput: !!secondInput ? `${secondInput}${e.text}` : `${e.text}`,
          ...rest
        }));
    }
    const { firstInput, secondInput, operand } = this.state
    switch (e.operand) {
      case 'clear':
        !!secondInput ? this.setState({ secondInput: '' }) : this.setState({ firstInput: '', operand: '' })
        break;
      case '=':
        this.calculate();
        break;
      case 'delete':
        !!secondInput ? this.setState(prev => ({
          ...prev,
          secondInput: secondInput.slice(0, -1)
        })) :
          this.setState(prev => ({
            ...prev,
            firstInput: firstInput.slice(0, -1)
          }))
        break;
      case 'changeMinus':
        const isMinus = !!secondInput ? secondInput.indexOf('-') > -1 : firstInput.indexOf('-') > -1;
        !!secondInput ? this.setState({
          secondInput: isMinus ? secondInput.slice('1') : `-${secondInput}`
        }) :
          this.setState({
            firstInput: isMinus ? firstInput.slice('1') : `-${firstInput}`
          })
        break;
      case '%':
        this.calculate();
        break;
      default:
        this.setState({ operand: e.operand })
        break;
    }
  }
  calculate = () => {
    const { firstInput, secondInput = '', operand } = this.state;
    let result = 0;
    switch (operand) {
      case '+':
        result = parseFloat(firstInput, 10) + parseFloat(secondInput, 10);
        break;
      case '-':
        result = parseFloat(firstInput, 10) - parseFloat(secondInput, 10);
        break;
      case '*':
        result = parseFloat(firstInput, 10) * parseFloat(secondInput, 10);
        break;
      case '/':
        result = parseFloat(firstInput, 10) / parseFloat(secondInput, 10);
        break;
      case '%':
        result = parseFloat(firstInput, 10) / 100;

    }
    this.setState({
      operand: '',
      secondInput: '',
      firstInput: `${result}`
    })
  }
  render() {
    const { btn = -1, animate, operand, firstInput, secondInput } = this.state;
    const flex = animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const fontSize = animate.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 14],
      extrapolate: 'clamp'
    });
    const fontSize2 = animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
      extrapolate: 'clamp'
    });
    setTimeout(() => {
      Animated.timing(animate,
        {
          toValue: !!operand
        }
      ).start()
    })
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.total}>
          <Animated.View style={styles.inputView}>
            <Animated.Text style={[styles.firstInput, { fontSize }]}>{firstInput || 0}</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.inputView, {
            flex
          }]}>
            <Animated.Text style={[styles.firstInput, { fontSize: fontSize2 }]}>{operand}</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.inputView, {
            flex
          }]}>
            <Animated.Text style={[styles.firstInput, { fontSize: fontSize2 }]}>{operand && (secondInput || 0)}</Animated.Text>
          </Animated.View>
        </View>
        <View style={styles.grid}>
          {calc.map((e, index) => (
            <TouchableOpacity key={index}
              style={[
                styles.item, styles[e.style]
              ]}
              onPress={this.calculation(e)}
            >
              <Text style={styles.itemText}>{e.text || 'text'}</Text>
            </TouchableOpacity>
          ))
          }
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3382db'
  },
  total: {
    width: '100%',
    height: height * 0.25,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: '2.5%'
  },
  inputView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10
  },
  firstInput: {
    color: '#fff',
    fontSize: 30
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
    backgroundColor: '#4190e9',
    flex: 1,
    paddingTop: 15
  },
  item: {
    width: width * .20,
    height: width * .20,
    margin: width * .025,
    borderRadius: width * .23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    color: '#fff',
    fontSize: 22
  },
  darkInner: {
    backgroundColor: '#3382db'
  },
  equal: {
    backgroundColor: '#04e400'
  },
  press: {
    backgroundColor: '#416ce9'
  }
})
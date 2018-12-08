import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

const HeroImage = require('../../source/heroImage.jpeg');

const M1 = require('../../source/mountain1.jpeg');
const M2 = require('../../source/mountain2.jpeg');
const I1 = require('../../source/island1.jpeg');
const I2 = require('../../source/island2.jpeg');

// http://collectui.com/designers/getjieyingjun/user-profile

class UI5 extends Component {
  state = {
    animation: new Animated.Value(0)
  }
  render() {
    const { animation } = this.state;
    const opacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    const marginLeft = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-25, 0],
      extrapolate: 'clamp'
    })
    setTimeout(() => {
      Animated.timing(animation,
        {
          toValue: this.props.isFocused,
          duration: 800
        }
      ).start()
    }, 0)
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.heroContainer}>
          <ImageBackground source={HeroImage} style={styles.heroImage}>
            <Text style={styles.heroText}>MICHAEL</Text>
            <TouchableOpacity style={styles.plusButton}>
              <Icon name={'add'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.grid}>
          <View style={styles.leftColumn}>
            <Animated.View style={[styles.leftRows, { marginLeft, opacity }]}>
              <Text style={styles.leftColumnText}>
                12K
              </Text>
              <Text style={[styles.leftColumnText, styles.leftColumnInner]}>
                Like
              </Text>
            </Animated.View>
            <Animated.View style={[styles.leftRows, { marginLeft, opacity }]}>
              <Text style={styles.leftColumnText}>
                628
              </Text>
              <Text style={[styles.leftColumnText, styles.leftColumnInner]}>
                Following
              </Text>
            </Animated.View>
            <Animated.View style={[styles.leftRows, { marginLeft, opacity }]}>
              <Text style={styles.leftColumnText}>
                1388
              </Text>
              <Text style={[styles.leftColumnText, styles.leftColumnInner]}>
                Follower
              </Text>
            </Animated.View>
          </View>
          <View style={styles.rightColumn}>
            <Animated.View style={[styles.headerView, { opacity }]}>
              <Text style={styles.header}>Michael</Text>
              <Text style={styles.subTitle}>25 / Leo / 171cm</Text>
            </Animated.View>
            <View style={styles.description}>
              <View style={{ flex: 3 }}>
                <Text style={styles.descriptionText}>
                  I am a man who likes to travel, especially like to travel to the island and mountains
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                <Icon name={'mail-outline'} size={24} color={'#37476e'} />
              </View>
            </View>
            <ScrollView style={styles.imageView} alwaysBounceVertical={false}>
              <ImageBackground source={M1} style={styles.image} />
              <ImageBackground source={I1} style={styles.image} />
              <ImageBackground source={M2} style={styles.image} />
              <ImageBackground source={I2} style={styles.image} />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(UI5)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heroContainer: {
    width: '100%',
    height: '45%',
    zIndex: 1
  },
  heroImage: {
    width: '100%',
    height: '100%'
  },
  heroText: {
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  plusButton: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 45,
    position: 'absolute',
    bottom: -22.5,
    left: 22.5,
    backgroundColor: '#3382db',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  leftColumn: {
    flex: 1,
    backgroundColor: '#f6f8fb',
    paddingTop: '3%',
    flexDirection: 'column',
  },
  leftRows: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftColumnText: {
    color: '#37476e',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  leftColumnInner: {
    color: '#9ca5bb',
    fontSize: 12
  },
  rightColumn: {
    flex: 3,
    paddingTop: 15
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37476e',
  },
  subTitle: {
    fontSize: 10,
    color: '#9ca5bb',
    marginLeft: 10
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderColor: '#f6f8fb'
  },
  descriptionText: {
    fontSize: 11,
    lineHeight: 18,
    fontWeight: 'bold',
    color: '#9ca5bb',
    textAlign: 'justify'
  },
  imageView: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1
  },
  image: {
    width: '100%',
    height: 125
  }
});
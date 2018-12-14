import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  Dimensions
} from 'react-native';
import AudioPlayer from 'react-native-play-audio';
import { formatTime } from './lib.js';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { withNavigationFocus } from 'react-navigation';

const cover = require('../../source/album-cover.jpg');


class UI9 extends Component {
  state = {
    rotation: new Animated.Value(0),
    duration: 0,
    currentTime: 0,
    status: false,
    shuffle: false,
    repeat: false
  }
  componentDidMount() {
    this.load();
  }
  componentDidUpdate({ isFocused }) {
    if (isFocused && !this.props.isFocused) {
      this.stopMusic()
    }
  }
  load = () => {
    AudioPlayer.prepare('https://raw.githubusercontent.com/Ketcap/Collect-Ui/a7c55e3c83b214735ff47b9584af6b1f6776607f/mobile/src/source/uptown.mp3', this.loaded);
  }
  loaded = () => {
    AudioPlayer.getDuration((duration) => {
      this.setState({ duration })
    });
    this.setCurrentTime();
  }
  setCurrentTime = () => {
    AudioPlayer.getCurrentTime((currentTime) => {
      this.setState({ currentTime });
      setTimeout(this.setCurrentTime, 250);
    });
  }
  spin = (status) => {
    if (!status) {
      const { rotation } = this.state;
      rotation.stopAnimation((value) => {
        this.setState({ rotation: new Animated.Value(value) });
      })
      return;
    }
    const { duration, currentTime } = this.state;
    const dur = (duration - currentTime) * 10000
    Animated.timing(
      this.state.rotation, {
        toValue: 100,
        easing: Easing.linear,
        duration: dur
      }
    ).start();
  }
  animations = () => {
    const { currentTime, duration, rotation } = this.state;
    const rotate = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const currentWidth = new Animated.Value(currentTime).interpolate({
      inputRange: [0, duration],
      outputRange: [0, width - 70]
    })
    return { rotate, currentWidth };
  }
  stopMusic = () => {
    AudioPlayer.pause();
    AudioPlayer.setTime(0);
    this.spin(false);
    this.setState({ status: false, rotation: new Animated.Value(0) });
  }
  toggleStatus = (stop) => () => (
    this.setState(prev => ({
      status: !prev.status
    }), () => {
      const { status } = this.state;
      this.spin(status);
      if (!status) {
        return AudioPlayer.pause();
      }
      return AudioPlayer.play();
    })
  )
  toggle = (name) => () => this.setState(prev => ({
    [name]: !prev[name]
  }))
  render() {
    const { currentTime, duration,
      status, shuffle, repeat
    } = this.state;
    const { currentWidth, rotate } = this.animations();
    return (
      <View style={styles.container}>
        <ImageBackground blurRadius={5} source={cover} resizeMode={'cover'} style={styles.imageBackground}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.coverView}>
            <Animated.Image
              source={cover}
              style={[styles.cover, { transform: [{ rotate }] }]}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.song}>Uptown Funk</Text>
            <Text style={styles.artist}>Mark Ronson ft. Bruno Mars</Text>
          </View>
          <View style={styles.time}>
            <Text style={{ color: '#fff' }}>{formatTime(currentTime)}</Text>
            <Text style={{ color: '#fff' }}>{formatTime(duration)}</Text>
            <View style={styles.timebar} />
            <Animated.View style={[styles.currentBar, { width: currentWidth }]} />
          </View>
          <View style={styles.controllers}>
            <Icon name={'shuffle'} color={!shuffle ? '#fff' : btnColor} size={24} onPress={this.toggle('shuffle')} />
            <Icon name={'control-start'} color={'#fff'} size={28} />
            <Icon name={!status ? 'control-play' : 'control-pause'} color={'#fff'} size={34} style={styles.play} onPress={this.toggleStatus()} />
            <Icon name={'control-end'} color={'#fff'} size={28} />
            <Icon name={'refresh'} color={!repeat ? '#fff' : btnColor} size={24} onPress={this.toggle('repeat')} />
            {/* 515151 */}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window');
import { ifIphoneX } from 'react-native-iphone-x-helper';
const btnColor = '#04c4c9';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: ifIphoneX(55, 25)
  },
  coverView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    width: width * .75,
    height: width * .75,
    borderRadius: width * .75 / 2
  },
  info: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  song: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    fontSize: 14,
    color: '#fff'
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  timebar: {
    position: 'absolute',
    width: width - 70,
    marginHorizontal: 35,
    height: 10,
    bottom: -15,
    backgroundColor: '#f2f2f2'
  },
  currentBar: {
    position: 'absolute',
    marginHorizontal: 35,
    height: 10,
    bottom: -15,
    backgroundColor: '#04c4c9',
    shadowColor: '#04c4c9',
    color: btnColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  controllers: {
    marginTop: 'auto',
    marginBottom: ifIphoneX(0, 0),
    paddingVertical: 20,
    alignSelf: 'flex-end',
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#515151',
    shadowColor: '#515151',
    color: btnColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  play: {
    shadowColor: '#04c4c9',
    color: btnColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default withNavigationFocus(UI9)
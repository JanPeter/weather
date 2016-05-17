import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import WeatherIcon from './WeatherIcon';

export default class ForecastItem extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.title}>{this.props.date}</Text>
        <WeatherIcon style={styles.icon} icon={this.props.icon} />
        <Text style={styles.title}>
          {Math.round(this.props.temp.min)}°/{Math.round(this.props.temp.max)}°
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3,
    marginBottom: 10,
    marginTop: 10
  },
  icon: {
    height: 21,
    width: 40
  }
});

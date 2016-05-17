import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import _ from 'lodash';

import WeatherIcon from './WeatherIcon';

export default class BigTemperature extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.cols}>
          <WeatherIcon style={styles.icon}
            icon={parseInt(this.props.weather[0].icon)} />
          <Text style={styles.temp}>{Math.round(this.props.temp.day)}°</Text>
        </View>
        <Text style={styles.desc}>{_.startCase(this.props.weather[0].description)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  temperatureContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  cols: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 8
  },
  temp: {
    fontSize: 48,
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: 8,
    letterSpacing: 3
  },
  desc: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  }
});

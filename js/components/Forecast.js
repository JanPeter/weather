import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import _ from 'lodash';
import moment from 'moment';

import ForecastItem from './ForecastItem';

export default class Forecast extends Component {
  render() {
    const dayItems = this.props.days.map(day => {
      const date = moment.unix(day.dt);
      const dayText = date.isSame(moment(), 'days') ? 'Today' : date.format('ddd');

      return (
        <ForecastItem key={day.dt} date={dayText}
          icon={parseInt(day.weather[0].icon)}
          temp={day.temp}
          style={styles.forecastItem} />
      )
    });

    return (
      <View style={styles.container}>
        {dayItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  forecastItem: {
    marginLeft: 8,
    marginRight: 8
  }
});

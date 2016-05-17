import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';

import { fetchTemp } from '../actions';

import BigTemperature from '../components/BigTemperature';
import Forecast from '../components/Forecast';
import Chart from '../components/Chart';

class WeatherApp extends Component {
  componentWillMount() {
    this.props.fetchTemp('Graz');
    // Also possible to specify "dayCounter"
    // this.props.fetchTemp('Graz', 4);
  }

  render() {
    if (!this.props.temp) {
      return (
        <View style={styles.container}>
          <Text style={styles.city}>
            Retrieving temperature...
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.part}>
          <Text style={styles.city}>
            {this.props.temp.city.name.toUpperCase()}, {this.props.temp.city.country.toUpperCase()}
          </Text>
        </View>
        <BigTemperature style={styles.part}
          {...this.props.temp.days[0]}/>
        <View style={{flex: 2}}>
          <Chart temps={this.props.temp.days.map(day => day.temp.day)} />
        </View>
        <Forecast days={this.props.temp.days} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c'
  },
  part: {
    flex: 1,
    justifyContent: 'center'
  },
  city: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    letterSpacing: 3
  }
});

function mapStateToProps(state) {
  return {
    temp: state.temp
  };
}

export default connect(mapStateToProps, { fetchTemp })(WeatherApp);

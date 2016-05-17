import React, { Component } from 'react';
import {
  Image
} from 'react-native';

const images = {
  '1': require('../../assets/weather/clear-sky.png'),
  '2': require('../../assets/weather/few-clouds.png'),
  '3': require('../../assets/weather/scattered-clouds.png'),
  '4': require('../../assets/weather/broken-clouds.png'),
  '9': require('../../assets/weather/shower-rain.png'),
  '10': require('../../assets/weather/rain.png'),
  '11': require('../../assets/weather/thunderstorm.png'),
  '14': require('../../assets/weather/snow.png'),
  '50': require('../../assets/weather/mist.png')
};

export default class WeatherIcon extends Component {
  render() {
    return (
      <Image style={this.props.style}
        source={images[this.props.icon]} />
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

import Svg, {
  Circle,
  Defs,
  Path,
  G,
  Stop,
  Text,
  LinearGradient
} from 'react-native-svg';

import _ from 'lodash';
import moment from 'moment';

export default class Chart extends Component {
  renderPoints(temps) {
    let points = [];

    const itemWidth = Dimensions.get('window').width / (temps.length + 1);
    const fourhtyWidth = (itemWidth / 10) * 4;

    return temps.map((temp, i) => {
      return (
        <G key={i + temp}>
          <Circle cx={(i + 1) * itemWidth} cy={temp} r="3" fill={i === 0 ? '#FEDD40':'white'} />
          <Text x={(i + 1) * itemWidth} y={temp - 30} fontSize="14"
            fontWeight="100"
            textAnchor="middle" fill="white" stroke="white">
            {`${Math.round(this.props.temps[i])}°`}
          </Text>
        </G>
      );
    });
  }

  buildPath(temps) {
    const length = temps.length + 1;
    const itemWidth = Dimensions.get('window').width / length;
    const fourhtyWidth = (itemWidth / 10) * 4;

    let data = 'M0,80 C30,80';
    temps.forEach((temp, i) => {
      let p = i + 1;
      data += ` ${itemWidth * p - fourhtyWidth},${temp} ${itemWidth * p},${temp} C${itemWidth * p + fourhtyWidth},${temp}`;
    });
    data += ` ${itemWidth * length - fourhtyWidth},80 ${itemWidth * length},80 L${itemWidth * length},300 L0,300 L0,80 Z`;
    return data;
  }

  render() {
    const max = _.max(this.props.temps);
    const min = _.min(this.props.temps);

    const range = max - min;

    const maxy = 40;
    const miny = 140;

    const temps = _.map(this.props.temps, temp => ((miny - maxy) / range) * (max - temp) + (maxy));

    return (
      <Svg height="250" width={Dimensions.get('window').width}>
        <Defs>
          <LinearGradient id="grad" x1="50%" x2="50%" y1="100%" y2="38%">
            <Stop stopColor="#FFFFFF" stopOpacity="0" offset="0%" />
            <Stop stopColor="#000000" stopOpacity="255" offset="100%" />
          </LinearGradient>
        </Defs>
        <Path d={this.buildPath(temps)}
        fill="url(#grad)" fillOpacity="0.16" />
        {this.renderPoints(temps)}
      </Svg>
    );
  }
}

const styles = StyleSheet.create({
});

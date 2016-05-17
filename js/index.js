import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import WeatherApp from './container/WeatherApp';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#16a085" barStyle="light-content" />
        <Provider store={createStoreWithMiddleware(reducers)}>
          <WeatherApp />
        </Provider>
      </View>
    );
  }
};

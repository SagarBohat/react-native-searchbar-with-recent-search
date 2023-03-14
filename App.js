/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './Routes';
import store from './src/redux/store';

function App() {

  return (
    <Provider store={store} >
      <SafeAreaView style={{ flex: 1, }} >
        <Routes />
      </SafeAreaView>
    </Provider>

  );
}

export default App;

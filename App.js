import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import AppNavigator from './navigation/Navigation'
import { createStore, combineReducers } from 'redux'
import rootReducer from './store/reducers'
import { Provider } from 'react-redux'
import applyMiddleware from './store/middleware'

const store = createStore(rootReducer, applyMiddleware)

const fonts = () => {
  return Font.loadAsync({
    'staatliches': require('./assets/fonts/Staatliches-Regular.ttf'),
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = props => {
  const [getFonts, setGetFonts] = useState(false)

  if(!getFonts){
    return(
      <AppLoading
        startAsync = {fonts}
        onFinish = {() => setGetFonts(true)}
        onError = {(err) => console.log(err)}
      />
    )
  }

    /*return (
    <View style={styles.screen}>
      <Header title={'UdaciCards'}/>
      <HomeScreen />
    </View>
  )*/
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});

export default App

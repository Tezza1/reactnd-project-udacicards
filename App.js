import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

const App = props => {

  return (
    <View style={styles.screen}>
      <Header title={'UdaciCards'}/>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});

export default App

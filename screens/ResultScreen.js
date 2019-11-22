import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

const ResultScreen = props => {
  const { currentDeck } = props
  const { questionNumber } = props
  const { progress } = props

  const percentage = (a, b) => {
    return Math.round((a * 100) / b)
  }

  return(
    <View style={styles.screen}>
      <Header title={"Udacicard's Japanese Builder"}/>
      <View style={styles.mainText}>
          <Text style={styles.title}>Results for {currentDeck.title}</Text>
      </View>
      <View>
        <Text style={styles.questionNumText}>Questions {questionNumber} of {currentDeck.questions.length}</Text>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>{progress} / {currentDeck.questions.length}</Text>
        <Text style={styles.resultsText}>{percentage(progress, currentDeck.questions.length)}% correct</Text>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>{
            props.navigation.navigate({routeName: 'Deck'})
        }}>
          <View style={styles.retakeButton}>
            <Text style={styles.retakeButtonText}>Retry quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

ResultScreen.navigationOptions = {
  headerTitle: 'Quiz Results',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd',
  headerLeft: null
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  mainText: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20
  },
  title :{
    fontFamily: 'openSansBold',
    color: '#0277bd',
    fontWeight: 'bold',
    fontSize: 20
  },
  questionNumText: {
    fontSize: 16,
    color: 'grey',
    fontStyle: 'italic',
    marginBottom: 10
  },
  resultsContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 40,
    borderColor: '#90a4ae',
    borderWidth: 1,
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    // android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  resultsText: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonArea: {
    alignItems: 'center'
  },
  retakeButton: {
    width: 300,
    maxWidth: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical: 40,
    borderColor: '#90a4ae',
    borderWidth: 1,
    // ios
    shadowColor: '#607d8b',
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    // android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#0277bd'
  },
  retakeButtonText: {
    fontFamily: 'openSansBold',
    color: 'white',
    fontSize: 16,
    marginLeft: 10
  }
})

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
    questionNumber: state.decks.questionNumber,
    progress: state.decks.progress
  }
}

export default connect(mapStateToProps)(ResultScreen)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Header'

const QuizScreen = props => {
  const { currentDeck } = props
  const { questionNumber } = props
  return(
    <View style={styles.screen}>
      <Header title={"Udacicard's Japanese Builder"}/>
      <View style={styles.mainText}>
          <Text style={styles.title}>Quiz for {currentDeck.title}</Text>
      </View>
      <View>
        <Text style={styles.questionNumText}>Question {questionNumber + 1} of {currentDeck.questions.length}</Text>
      </View>
      <View>
        <Text style={styles.questionText}>{questionNumber+1 > currentDeck.questions.length ? '' : currentDeck.questions[questionNumber].question}</Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>{
            props.navigation.navigate({routeName: 'Answer'})
        }}>
          <View style={styles.answerButton}>
            <Text style={styles.answerButtonText}>Show answer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

QuizScreen.navigationOptions = {
  headerTitle: 'Quiz',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
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
  questionText: {
    fontSize: 20,
    marginVertical: 20
  },
  answerButton: {
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
  answerButtonText: {
    fontFamily: 'openSansBold',
    color: 'white',
    fontSize: 16,
    marginLeft: 10
  }
})

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
    questionNumber: state.decks.questionNumber
  }
}

export default connect(mapStateToProps)(QuizScreen)

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import { quizNumber, quizProgress} from '../store/actions/decks'
import Header from '../components/Header'

const AnswerScreen = props => {
  const { currentDeck } = props
  const { questionNumber } = props
  const currentQ = questionNumber + 1

  const wrongHandler = () => {
    props.quizNumber(currentQ)
    if(currentQ >= currentDeck.questions.length){
      props.navigation.navigate({routeName: 'Result'})
    } else {
      props.navigation.goBack()
    }
  }

  const correctHandler = () => {
    props.quizProgress()
    wrongHandler()
  }

  return(
    <View style={styles.screen}>
      <Header title={"Udacicard's Japanese Builder"}/>
      <View style={styles.mainText}>
          <Text style={styles.title}>Quiz for {currentDeck.title}</Text>
      </View>
      <View>
        <Text style={styles.questionNumText}>Question {currentQ} of {currentDeck.questions.length}</Text>
      </View>
      <View>
        <Text style={styles.answerText}>{currentQ > currentDeck.questions.length ? '' : currentDeck.questions[questionNumber].answer}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title='Wrong'
          color='red'
          onPress={wrongHandler}
        />
        <Button
          title='Correct'
          color='green'
          onPress={correctHandler}
        />
      </View>
    </View>
  )
}

AnswerScreen.navigationOptions = {
  headerTitle: 'Answer',
  headerStyle: {
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  headerTintColor: '#0277bd'
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
  answerText: {
    fontSize: 20,
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  },
})

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
    questionNumber: state.decks.questionNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    quizNumber: (num) => dispatch(quizNumber(num)),
    quizProgress: () => dispatch(quizProgress())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerScreen)

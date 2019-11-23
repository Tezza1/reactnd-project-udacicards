import { GET_DECKS, ADD_DECK, SET_DECK, ADD_QUIZ, QUESTION_NUMBER, QUIZ_PROGRESS } from './actionTypes'
import { DECKS } from '../../data/data'
import { STORAGE_KEY } from '../../utils/keys'
import { AsyncStorage } from 'react-native'

export const getDecks = decks => {
  return {
    type: GET_DECKS,
    decks
  }
}

export const handleGetDecks = () => {
  return async dispatch => {
    try {
      await AsyncStorage.getItem(STORAGE_KEY)
        .then(decks => {
          let data = JSON.parse(decks)
          if (data === null){
            dispatch(getDecks(DECKS))
          } else {
            dispatch(getDecks(data))
          }
        })
        // for error checking
        // await AsyncStorage.clear()
    } catch(err) {
      console.log(err)
    }
    return 'done'
  }
}

/*export const handleGetDecks = () => {
  return dispatch => {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(decks => {
        let data = JSON.parse(decks)
        if (data === null){
          dispatch(getDecks(DECKS))
        } else {
          dispatch(getDecks(data))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}*/

export const addDeck = title => {
  return {
    type: ADD_DECK,
    title
  }
}

export const setDeck = title => {
  return {
    type: SET_DECK,
    title
  }
}

export const addQuiz = question => {
  return{
    type: ADD_QUIZ,
    question
  }
}

export const quizNumber = number => {
  return {
    type: QUESTION_NUMBER,
    number
  }
}

export const quizProgress = reset => {
  return {
    type: QUIZ_PROGRESS,
    reset
  }
}


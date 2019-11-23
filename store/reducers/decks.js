import { GET_DECKS, ADD_DECK, SET_DECK, ADD_QUIZ, QUESTION_NUMBER, QUIZ_PROGRESS } from '../actions/actionTypes'
import uuid from "uuid"
import { STORAGE_KEY } from '../../utils/keys'
import { AsyncStorage } from 'react-native'

const initialState = {
  decks: {},
  currentDeck: '',
  questionNumber: 0,
  progress: 0
}

const storeData = async data => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err)
  }
}

const storeData2 = d => {
  console.log("----------------------------- test again ------------")
  console.log(d)
}

const decks = (state = initialState, action) => {
  switch(action.type) {
    case GET_DECKS:
      const { decks } = action
      return {
        ...state,
        decks
      }
    case ADD_DECK:
      const addData = {questions: [], "title": action.title}
      const currentDecks = state.decks
      currentDecks[uuid.v4()] = addData
      storeData(currentDecks)  // AsyncStorage
      return {
        ...state,
        decks: currentDecks
      }
    case SET_DECK:
      const { title } = action
      const deck1 = state.decks
      let currentDeck = ''

      for (let value of Object.values(deck1)) {
        if (title === value.title) {
          currentDeck = value
        }
      }
      return {
        ...state,
        currentDeck: currentDeck
      }
    case ADD_QUIZ:
      const { question } = action
      const deck2 = state.decks
      const currentTitle = state.currentDeck.title
      let updatedDeck = ''

      for (let value of Object.values(deck2)) {
        if (currentTitle === value.title) {
          updatedDeck = value.questions.concat(question)
          const key = Object.keys(deck2)[Object.values(deck2).indexOf(value)]
          deck2[key].questions = updatedDeck
        }
      }
      return {
        ...state,
        decks: deck2
      }
    case QUESTION_NUMBER:
      const { number } = action
      return {
        ...state,
        questionNumber: number
      }
    case QUIZ_PROGRESS:
      let score = state.progress
      if(action.reset){
        score = 0
      } else {
        score += 1
      }
      return {
        ...state,
        progress: score
      }
    default:
      return state
  }
}

export default decks

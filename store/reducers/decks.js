import { GET_DECKS, ADD_DECK, SET_DECK, ADD_QUIZ, QUESTION_NUMBER, QUIZ_PROGRESS } from '../actions/actionTypes'
import uuid from "uuid"

const initialState = {
  decks: {},
  currentDeck: '',
  questionNumber: 0,
  progress: 0
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
      let updatedDecks = ''
      let updatedDeck = ''

      for (let value of Object.values(deck2)) {
        if (currentTitle === value.title) {
          value.questions.push(question)
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

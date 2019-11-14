import { GET_DECKS, ADD_DECK, SET_DECK }from '../actions/actionTypes'
import uuid from "uuid"

const initialState = {
  decks: {},
  currentDeck: ''
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
      const decks1 = state.decks
      let currentDeck = ''

      for (let value of Object.values(decks1)) {
        if (title === value.title) {
          currentDeck = value
        }
      }
      return {
        ...state,
        currentDeck: currentDeck
      }
    default:
      return state
  }
}

export default decks

import { GET_QUESTIONS, SET_DECK }from '../actions/actionTypes'

const initialState = {
  questions: {},
  currentDeck: ''
}

const questions = (state = initialState, action) => {
  switch(action.type) {
    case GET_QUESTIONS:
      const { questions } = action
      return {
        ...state,
        questions
      }
    case SET_DECK:
      const { title } = action
      const questions1 = state.questions
      let currentDeck = ''

      for (let value of Object.values(questions1)) {
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

export default questions

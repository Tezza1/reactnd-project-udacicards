import GET_QUESTIONS from '../actions/actionTypes'

const initialState = {
  questions: {}
}

const questions = (state = initialState, action) => {
  switch(action.type) {
    case GET_QUESTIONS:
      const { questions } = action
      return {
        ...state,
        questions
      }
    default:
      return state
  }
}

export default questions

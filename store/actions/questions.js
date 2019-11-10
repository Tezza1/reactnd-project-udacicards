import GET_QUESTIONS from './actionTypes'
import { QUESTIONS } from '../../data/data'

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions: QUESTIONS
  }
}


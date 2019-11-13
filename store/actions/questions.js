import { GET_QUESTIONS, SET_DECK } from './actionTypes'
import { QUESTIONS } from '../../data/data'

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions: QUESTIONS
  }
}

export const setDeck = title => {
  return {
    type: SET_DECK,
    title
  }
}


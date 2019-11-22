import { GET_DECKS, ADD_DECK, SET_DECK, ADD_QUIZ, QUESTION_NUMBER, QUIZ_PROGRESS } from './actionTypes'
import { DECKS } from '../../data/data'

export const getDecks = decks => {
  return {
    type: GET_DECKS,
    decks: DECKS
  }
}

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


import { GET_DECKS, ADD_DECK, SET_DECK } from './actionTypes'
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


import { legacy_createStore } from 'redux'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_TEXT = 'CHANGE_TEXT'

const initialState = {
  count: 100,
  username: 'ingrese su nombre'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}

export const store = legacy_createStore(reducer)
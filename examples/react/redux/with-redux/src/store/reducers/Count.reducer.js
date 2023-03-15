export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const initialState = {
  count: 100,
}

const countReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default countReducer
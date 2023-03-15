export const CHANGE_TEXT = 'CHANGE_TEXT'

const initialState = {
  username: 'ingrese su nombre'
}

const textReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}

export default textReducer
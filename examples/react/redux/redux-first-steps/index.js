const { createStore } = require('redux')

//// store
const initialState = {
  count: 0,
  name: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload.number
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - action.payload.number
      }
    case 'changeName':
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state
    }
}

const store = createStore(reducer)

///// END store

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'increment', payload: { number: 5 } })
store.dispatch({ type: 'increment', payload: { number: 5 } })
store.dispatch({ type: 'changeName', payload: { name: 'Jean' } })
store.dispatch({ type: 'increment', payload: { number: 5 } })
store.dispatch({ type: 'decrement', payload: { number: 8 } })


///Principios
//  Estados predecibles
// Almacenamiento centralizado
// Debuggeable
// Flexible

// store
const store = {
  posts: [],
  loading: false,
  count: 0
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }
    break;
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    break;
  }
}

// dispatch
const dispatch = (action) => {
  store= reducer(store, action)
}

// components
const handleClick = () => {
  dispatch({ type: 'increment' })
  dispatch({ type: 'decrement' })
}
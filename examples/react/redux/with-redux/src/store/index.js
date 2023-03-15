import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import textReducer from './reducers/Text.reducer'
import countReducer from './reducers/Count.reducer'
import postReducer from './reducers/Posts.reducer'


// function logger(store) {
//   return function(next) {
//     return function(action) {
//       const prevState = store.getState()
//       next(action)
//       console.log('previous state:', prevState, action, 'next state:', store.getState())
//     }
//   }
// }

const rootReducer = combineReducers({
  textReducer,
  countReducer,
  postReducer
})

const middleware = applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer, middleware)
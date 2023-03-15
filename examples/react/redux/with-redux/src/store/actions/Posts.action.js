import axios from 'axios'
import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_ERROR,
} from '../reducers/Posts.reducer'

//action creator
export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: POSTS_LOADING, payload: true })
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(( res )  => {
        dispatch({ type: POSTS_SUCCESS, payload: res.data })
      })
      .catch((error) => {
        dispatch({ type: POSTS_ERROR, payload: error })
      })
      .finally(() => {
        dispatch({ type: POSTS_LOADING, payload: false })
      })
  }
}
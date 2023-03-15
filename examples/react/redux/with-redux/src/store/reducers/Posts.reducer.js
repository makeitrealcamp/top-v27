export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_ERROR = 'POSTS_ERROR'


const initialState = {
  posts: [],
  error: null,
  loading: false,
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default postReducer
import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter/counter/counterSlice'
import posts from './slices/posts/postsSlice'

export default configureStore({
  reducer: {
    counter,
    posts
  }
})

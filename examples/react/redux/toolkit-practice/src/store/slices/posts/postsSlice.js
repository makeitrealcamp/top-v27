import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts', 
  async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return data
    } catch(error) {
      return error
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default postsSlice.reducer
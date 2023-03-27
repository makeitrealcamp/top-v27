import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../store/slices/posts/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch()
  const { posts, status, error } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  if(status === 'loading') {
    return <h4>Loading...</h4>
  }
  
  if(error === 'failed') {
    return <h4>{error}</h4>
  }

  return(
    <React.Fragment>
      <h2>posts</h2>
      {posts.map((item) => {
        return(
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        )}
      )}
    </React.Fragment>
  )
}

export default PostsList
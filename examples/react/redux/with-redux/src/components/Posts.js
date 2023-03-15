import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getPosts } from '../store/actions/Posts.action';

const Posts = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.postReducer)


  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(error !== null) {
    return <p>Ups! Ocurrió un error. Error: {error.message}. Vuelve a intentarlo</p>
  }

  return(
    <React.Fragment>  
      <h3>Mira los POSTS</h3>
      {loading ? (
        <p>Loading...</p>
      ) : 
      posts.map((item) => {
        return(
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )}
      )}
    </React.Fragment>
  )
}

export default Posts
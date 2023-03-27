import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../store/slices/counter/counter/counterSlice"

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return(
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())} > Incrementar </button>
      <button onClick={() => dispatch(decrement())} > Decrementar </button>
    </React.Fragment>
  )
}

export default Counter
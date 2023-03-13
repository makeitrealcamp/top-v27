import { useSelector } from 'react-redux'

const Counter = () => {
  const countStore = useSelector((state) => state.count)

  return(
    <h1>{countStore}</h1>
  )
}

export default Counter
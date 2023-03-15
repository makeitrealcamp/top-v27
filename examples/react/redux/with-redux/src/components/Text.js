import { useSelector } from "react-redux"

const Text = () => {
  const usernameStore = useSelector((state) => state.textReducer.username)

  return(
    <h2>{usernameStore}</h2>
  )
}

export default Text
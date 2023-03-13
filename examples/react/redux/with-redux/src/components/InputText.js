import { useDispatch, useSelector } from "react-redux"
import { CHANGE_TEXT } from "../store"

const InputText = () => {
  const dispatch = useDispatch()
  const usernameStore = useSelector(state => state.username) 

  return(
    <input
      type='text'
      onChange={ (event) => dispatch({ type:  CHANGE_TEXT, payload: event.target.value})}
      value={usernameStore}
    />
  )
}

export default InputText
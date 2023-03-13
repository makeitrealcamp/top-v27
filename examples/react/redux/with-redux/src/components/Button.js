import { useDispatch } from "react-redux"


const Button = ({ typeAction, children }) => {
  const dispatch = useDispatch()

  return(
    <button
      type= 'button'
      onClick={() => dispatch({ type: typeAction }) }
    >
      {children}
    </button>
  )
}

export default Button
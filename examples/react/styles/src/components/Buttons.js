const Button = ({ children, color }) => {
  return(
    <button className={`button-send ${color}`}>{children}</button>
  )
}

export default Button
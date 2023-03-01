import { Link } from "react-router-dom"

const Header = () => {
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>Nosotros</Link>
    </>
  )
}

export default Header
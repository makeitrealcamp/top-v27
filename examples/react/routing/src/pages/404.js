import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <>
      <h1>Ups! lo que esta buscando no existe</h1>
      <Link to="/">Ir a el home</Link>
    </>
  )
}

export default NotFoundPage
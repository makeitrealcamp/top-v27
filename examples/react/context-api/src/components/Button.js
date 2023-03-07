import React, { useContext, useState } from "react"
import { AuthContext } from "../store/AuthContext"

const Button = () => {
  const auth = useContext(AuthContext)
  const [ dataUser, setDataUser ] = useState('')

  return(
    <React.Fragment>
      <input
        type="text"
        value={dataUser}
        onChange={(e) => setDataUser(e.target.value)}
      />
      <button 
          onClick={() => auth.handleLogin(dataUser)}
      >
        Iniciar Sesión
      </button>
    </React.Fragment>
  )
}

export default Button
import { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ user, setUser ] = useState('')

  const handleLogin = (name) => {
    setIsAuthenticated(true)
    setUser(name)
  } 
 
  return(
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        handleLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
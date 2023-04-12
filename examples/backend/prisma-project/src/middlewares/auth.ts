import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../auth/auth.services'
import { AuthUser } from '../auth/auth.types'

export const auth = (req: AuthUser, res: Response, next: NextFunction) => {
  try {
    // En el back es con minuscula y en el front es con mayuscula    
    const { authorization } = req.headers

    if(!authorization){
      throw new Error('Su sesión expiró')
    }

    //Separar beare del token
    const [_, token] = authorization.split(' ')

    if(!token) {
      throw new Error('Su sesión expiró')
    }

    //Reversión de la codificación del token
    const { id } = verifyToken(token) as { id: string  }

    req.user = id

    next()    
  } catch(error: any) {
    res.status(401).json({ message: error.message })
  }
}
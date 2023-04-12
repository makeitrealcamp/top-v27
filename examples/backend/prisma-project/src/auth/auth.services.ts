import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const SECRET = process.env.SECRET_KEY as string

/**
 * 
 * @param email 
 * @returns 
 */
export const login = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email
    }
  })
}

/**
 * Return a JWT token signed by the app secret key
 * @param payload Object / String Data to be signed
 * @returns string token 
 */
export const signToken = (payload: any) => {
  const token = jwt.sign(
    payload,
    SECRET,
    { expiresIn: 60 * 60 * 24 }
  )

  return token
}

/**
 * Validates a JWT
 * @param token string token
 * @returns Object | Boolean
 */
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET)

    return decoded
  } catch(error) {
    return false
  }
}
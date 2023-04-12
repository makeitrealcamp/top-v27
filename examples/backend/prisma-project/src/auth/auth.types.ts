import { Request } from "express"

export interface AuthUser extends Request {
  user?: string  
}
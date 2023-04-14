import { createUser } from './../../api/user/user.services';
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { login } from '../auth.services';
import { signToken } from '../auth.services';
import { sendNodeMailer } from '../../config/nodemailer';
import { welcomeEmail } from '../../utils/emails';

export const singupController = async (
  req: Request,
  res: Response
) => {
  try {
    const { firstname, lastname, email } = req.body
    //bcrypt.hash recibe dos argumentos
    // - La contraseña que queremos encriptar
    // - El salt = hace referencia al número de procesos para encriptar 
    const encPassword = await bcrypt.hash(req.body.password, 10)
    const user = await createUser({...req.body, password: encPassword})

    const token = signToken({ id: user.id })

    await sendNodeMailer(welcomeEmail(user))

    res.status(201).json({ message: 'User created', data: { firstname, lastname, email }, token })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const loginController = async(
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body

    const user = await login(email)

    if(!user) {
      throw new Error('Email o contraseña invalido')
    }

    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid) {
      throw new Error('Email o contraseña invalido')
    }

    const { id, firstname, lastname } = user

    const token = signToken({ id: user.id })

    res.status(201).json({ message: 'User login successfully', data: { email, firstname, lastname }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}
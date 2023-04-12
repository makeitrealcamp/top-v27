import { Request, Response } from "express";
import { 
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login
} from "./user.services";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthUser } from "../../middlewares/auth";

export const createUserController = async (
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

    const token = jwt.sign(
      { id: user.id },
      's3cr3tk3y',
      { expiresIn: 60 * 60 * 24 }
    )

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

    const token = jwt.sign(
      { id: id },
      's3cr3tk3y',
      { expiresIn: 60 * 60 * 24 }
    )

    res.status(201).json({ message: 'User login successfully', data: { email, firstname, lastname }, token })

  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({ message: 'Users found!', data: users });
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response
) => {
  try { 
    const { id } = req.params;
    const user = await getUserById(id);

    res.status(200).json({ message: 'User found!', data: user });
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUserController = async (
  req: AuthUser,
  res: Response
) => {
  try { 
    const id  = req.user ? req.user : '';

    const user = await getUserById(id);

    const userUpdated = await updateUser(id, {...req.body, password: user?.password});
    res.status(200).json({ message: 'User updated', data: userUpdated });
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUserController = async (
  req: Request,
  res: Response
) => {
  try { 
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(200).json({ message: 'User deleted', data: user });
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}
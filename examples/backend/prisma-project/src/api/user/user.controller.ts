import { Request, Response } from "express";
import { 
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.services";
import { AuthUser } from "../../auth/auth.types";

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
    const id  = req.user ? req.user : ''

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
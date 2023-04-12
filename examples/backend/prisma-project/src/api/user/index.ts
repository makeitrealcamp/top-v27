import { Router } from "express";
import { 
  createUserController,
  getAllUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  loginController 
} from "./user.controller";
import { auth } from "../../middlewares/auth";

const router = Router()

router.get('/', getAllUserController);
router.get('/:id', getUserByIdController);
router.post('/', createUserController);
router.put('/', auth, updateUserController);
router.delete('/:id', deleteUserController);
router.post('/login', loginController);

export default router
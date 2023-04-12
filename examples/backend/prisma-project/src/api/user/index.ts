import { Router } from "express";
import { 
  getAllUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "./user.controller";
import { auth } from "../../middlewares/auth";

const router = Router()

router.get('/', getAllUserController);
router.get('/:id', getUserByIdController);
router.put('/', auth, updateUserController);
router.delete('/:id', auth, deleteUserController);


export default router
import { Router } from "express";
import { singupController, loginController } from "./local.controller";

const router = Router()

router.post('/signup', singupController)
router.post('/login', loginController)

export default router
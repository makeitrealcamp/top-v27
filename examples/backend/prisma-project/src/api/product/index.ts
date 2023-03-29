import { Router } from 'express'

import { 
  getAllProductsController, 
  createProductController, 
  getProducByIdController, 
  updateProductController, 
  deleteProductController 
} from './product.controller'

const router = Router()

// GET /api/products
router.get("/", getAllProductsController);
// GET /api/products/:id
router.get("/:id", getProducByIdController);
// POST /api/products
router.post("/", createProductController);
// PATCH /api/products/:id
router.patch("/:id", updateProductController);
// DELETE /api/products/:id
router.delete("/:id", deleteProductController);

export default router
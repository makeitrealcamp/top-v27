import { Router } from "express";

import { 
  createReviewController,
  deleteReviewController,
  getAllReviewsController,
  getReviewByIdController,
  updateReviewController,
} from "./review.controller";

const router = Router()

// GET /api/reviews
router.get("/", getAllReviewsController);
// GET /api/reviews/:id
router.get("/:id", getReviewByIdController);
// POST /api/reviews
router.post("/", createReviewController);
// PATCH /api/reviews/:id
router.patch("/:id", updateReviewController);
// DELETE /api/reviews/:id
router.delete("/:id", deleteReviewController);

export default router
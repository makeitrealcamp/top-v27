import { Request, Response, NextFunction } from "express";
import { 
  createReview,
  getAllReviews,
  deleteReview,
  getReviewById,
  updateReview,
} from "./review.services";

export const getAllReviewsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const reviews = await getAllReviews()

    res.status(200).json({ message: 'Reviews found', data: reviews })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getReviewByIdController = async(
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);
    res.status(200).json({ message: 'Review found', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createReviewController = async (
  req: Request,
  res: Response,
) => {
  try {    
    const review = await createReview(req.body)

    res.status(201).json({ message: 'Review created', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })

  }
}

export const updateReviewController = async (
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await updateReview(id, req.body);
    res.status(200).json({ message: 'Review updated', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteReviewController = async (
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await deleteReview(id);
    res.status(200).json({ message: 'Review deleted', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}
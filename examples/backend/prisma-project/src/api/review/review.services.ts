import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const getAllReviews = () => {
  return prisma.review.findMany()
}

export const getReviewById = (id: string) => {
  return prisma.review.findUnique({
    where: {
      id: id,
    },
  });
}

export const createReview = (input: any) => {
  return prisma.review.create({
    data: {
      text: input.text,
      rating: parseInt(input.rating),
      product: {
        connect:{
          id: input.productId
        }
      }
    }
  })
}

export const updateReview = (id: string, review: any) => {
  return prisma.review.update({
    where: {
      id: id,
    },
    data: {
      text: review.text,
      rating: parseInt(review.rating),
    },
  });
}

export const deleteReview = (id: string) => {
  return prisma.review.delete({
    where: {
      id: id,
    },
  });
}
import { PrismaClient } from "@prisma/client"
import  { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const seedReview = async (prisma: PrismaClient): Promise<void> => {
  const products = await prisma.product.findMany()

  for(const product of products) {

    const numberOfReviews = Math.floor(Math.random() * 5) + 1

    for(let i = 0; i < numberOfReviews; i++) {
      await prisma.review.create({
        data: {
          text: faker.lorem.sentence(),
          rating: Math.floor(Math.random() * 5) + 1,
          product: {
            connect:{
              id: product.id
            }
          }
        }
      })
    }
  }

  console.log('reviews seeded successfully');
  
}

export default seedReview
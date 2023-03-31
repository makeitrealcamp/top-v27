import { PrismaClient } from "@prisma/client"
import  { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const seedProduct = async (prisma: PrismaClient): Promise<void> => {
  const products = []

  for(let i = 0; i < 20; i++) {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price())
    }

    products.push(product)
  }

  await prisma.product.createMany({
    data: products
  })

  console.log('products seeded successfully');
}

export default seedProduct
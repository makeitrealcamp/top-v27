import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// CRUD 
// READ - GET
export const getAllProducts = () => {
  return prisma.products.findMany()
} 

//Create - POST
export const createProduct = (input: any) => {
  return prisma.products.create({
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price)
    }
  })
}

// ReadId - GET
export const getProducById = (id: string) => {
  return prisma.products.findUnique({
    where: {
      id: id
    }
  })
}

//Update - PUT
export const updateProduct = (id: string, input: any) => {
  return prisma.products.update({
    where: {
      id: id,
    },
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price)
    }
  })
}

export function deleteProduct(id: string) {
  return prisma.products.delete({
    where: {
      id: id,
    },
  });
}